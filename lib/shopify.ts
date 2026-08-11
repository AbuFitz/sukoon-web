const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const TOKEN  = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
const ENDPOINT = `https://${DOMAIN}/api/2025-01/graphql.json`;

// ─── Types ──────────────────────────────────────────────────────────────────

export type ShopifyImage = { url: string; altText: string | null };

export type ShopifyVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  priceV2: { amount: string; currencyCode: string };
  image: ShopifyImage | null;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: ShopifyImage | null;
  variants: { nodes: ShopifyVariant[] };
};

export type ShopifyCartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    priceV2: { amount: string; currencyCode: string };
    image: ShopifyImage | null;
    product: { title: string; handle: string };
  };
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: { amount: string; currencyCode: string };
    totalAmount:    { amount: string; currencyCode: string };
  };
  lines: { nodes: ShopifyCartLine[] };
};

// ─── Fetch helper ────────────────────────────────────────────────────────────

async function storefront<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message ?? "Shopify error");
  return json.data as T;
}

// ─── Fragments ───────────────────────────────────────────────────────────────

const CART_FRAGMENT = `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount { amount currencyCode }
      totalAmount    { amount currencyCode }
    }
    lines(first: 50) {
      nodes {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            priceV2 { amount currencyCode }
            image { url altText }
            product { title handle }
          }
        }
      }
    }
  }
`;

// ─── Products ────────────────────────────────────────────────────────────────

export async function getProducts(): Promise<ShopifyProduct[]> {
  const data = await storefront<{ products: { nodes: ShopifyProduct[] } }>(`
    query GetProducts {
      products(first: 20) {
        nodes {
          id handle title description
          featuredImage { url altText }
          variants(first: 1) {
            nodes {
              id title availableForSale
              priceV2 { amount currencyCode }
              image { url altText }
            }
          }
        }
      }
    }
  `);
  return data.products.nodes;
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await storefront<{ product: ShopifyProduct | null }>(`
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        id handle title description
        featuredImage { url altText }
        variants(first: 10) {
          nodes {
            id title availableForSale
            priceV2 { amount currencyCode }
            image { url altText }
          }
        }
      }
    }
  `, { handle });
  return data.product;
}

// ─── Cart mutations ──────────────────────────────────────────────────────────

export async function cartCreate(variantId: string, qty: number): Promise<ShopifyCart> {
  const data = await storefront<{ cartCreate: { cart: ShopifyCart } }>(`
    mutation CartCreate($variantId: ID!, $qty: Int!) {
      cartCreate(input: {
        lines: [{ merchandiseId: $variantId, quantity: $qty }]
      }) {
        cart { ...CartFields }
      }
    }
    ${CART_FRAGMENT}
  `, { variantId, qty });
  return data.cartCreate.cart;
}

export async function cartLinesAdd(cartId: string, variantId: string, qty: number): Promise<ShopifyCart> {
  const data = await storefront<{ cartLinesAdd: { cart: ShopifyCart } }>(`
    mutation CartLinesAdd($cartId: ID!, $variantId: ID!, $qty: Int!) {
      cartLinesAdd(cartId: $cartId, lines: [{ merchandiseId: $variantId, quantity: $qty }]) {
        cart { ...CartFields }
      }
    }
    ${CART_FRAGMENT}
  `, { cartId, variantId, qty });
  return data.cartLinesAdd.cart;
}

export async function cartLinesUpdate(cartId: string, lineId: string, qty: number): Promise<ShopifyCart> {
  const data = await storefront<{ cartLinesUpdate: { cart: ShopifyCart } }>(`
    mutation CartLinesUpdate($cartId: ID!, $lineId: ID!, $qty: Int!) {
      cartLinesUpdate(cartId: $cartId, lines: [{ id: $lineId, quantity: $qty }]) {
        cart { ...CartFields }
      }
    }
    ${CART_FRAGMENT}
  `, { cartId, lineId, qty });
  return data.cartLinesUpdate.cart;
}

export async function cartLinesRemove(cartId: string, lineId: string): Promise<ShopifyCart> {
  const data = await storefront<{ cartLinesRemove: { cart: ShopifyCart } }>(`
    mutation CartLinesRemove($cartId: ID!, $lineId: ID!) {
      cartLinesRemove(cartId: $cartId, lineIds: [$lineId]) {
        cart { ...CartFields }
      }
    }
    ${CART_FRAGMENT}
  `, { cartId, lineId });
  return data.cartLinesRemove.cart;
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await storefront<{ cart: ShopifyCart | null }>(`
    query GetCart($cartId: ID!) {
      cart(id: $cartId) { ...CartFields }
    }
    ${CART_FRAGMENT}
  `, { cartId });
  return data.cart;
}

// ─── Convenience: build handle→variantId map from all products ───────────────
// Pages call this once on the server; variantIds flow down as props.
// This means Shopify is the source of truth — no hardcoded handles in pages.

export type VariantInfo = { variantId: string; availableForSale: boolean };

export async function getVariantIdMap(): Promise<Record<string, VariantInfo>> {
  const prods = await getProducts();
  const map: Record<string, VariantInfo> = {};
  for (const p of prods) {
    const v = p.variants.nodes[0];
    if (v?.id) {
      map[p.handle] = { variantId: v.id, availableForSale: v.availableForSale };
    }
  }
  return map;
}

// ─── Customer accounts (classic Storefront API email/password) ───────────────

export type ShopifyCustomer = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

export type CustomerUserError = { code: string | null; field: string[] | null; message: string };

const CUSTOMER_FRAGMENT = `
  fragment CustomerFields on Customer {
    id
    firstName
    lastName
    email
  }
`;

function firstUserError(errors: CustomerUserError[] | undefined, fallback: string): string | null {
  if (!errors || errors.length === 0) return null;
  return errors[0].message || fallback;
}

export async function customerSignIn(email: string, password: string): Promise<{ accessToken: string; expiresAt: string }> {
  const data = await storefront<{
    customerAccessTokenCreate: {
      customerAccessToken: { accessToken: string; expiresAt: string } | null;
      customerUserErrors: CustomerUserError[];
    };
  }>(`
    mutation CustomerSignIn($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken { accessToken expiresAt }
        customerUserErrors { code field message }
      }
    }
  `, { input: { email, password } });

  const err = firstUserError(data.customerAccessTokenCreate.customerUserErrors, "Couldn't sign in.");
  if (err) throw new Error(err);
  const token = data.customerAccessTokenCreate.customerAccessToken;
  if (!token) throw new Error("Couldn't sign in.");
  return token;
}

export async function customerSignUp(email: string, password: string, firstName: string, lastName: string): Promise<void> {
  const data = await storefront<{
    customerCreate: { customer: { id: string } | null; customerUserErrors: CustomerUserError[] };
  }>(`
    mutation CustomerSignUp($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer { id }
        customerUserErrors { code field message }
      }
    }
  `, { input: { email, password, firstName, lastName } });

  const err = firstUserError(data.customerCreate.customerUserErrors, "Couldn't create your account.");
  if (err) throw new Error(err);
}

export async function customerSignOut(accessToken: string): Promise<void> {
  await storefront(`
    mutation CustomerSignOut($customerAccessToken: String!) {
      customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
        deletedAccessToken
        userErrors { field message }
      }
    }
  `, { customerAccessToken: accessToken });
}

export async function getCustomer(accessToken: string): Promise<ShopifyCustomer | null> {
  const data = await storefront<{ customer: ShopifyCustomer | null }>(`
    query GetCustomer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) { ...CustomerFields }
    }
    ${CUSTOMER_FRAGMENT}
  `, { customerAccessToken: accessToken });
  return data.customer;
}

// ─── Price helper ─────────────────────────────────────────────────────────────

export function formatPrice(amount: string, currencyCode: string): string {
  const num = parseFloat(amount);
  if (currencyCode === "GBP") return `£${num.toFixed(2).replace(".00", "")}`;
  return `${currencyCode} ${num.toFixed(2)}`;
}
