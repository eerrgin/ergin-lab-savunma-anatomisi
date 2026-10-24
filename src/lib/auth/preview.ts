/**
 * OAuth defaults for deployments that explicitly configure the identity broker.
 *
 * Client credentials are intentionally NOT stored in this repository. Set
 * GROK_AUTH_CLIENT_ID and GROK_AUTH_CLIENT_SECRET in the deployment provider's
 * secret store. Without both values, federated sign-in remains unconfigured.
 */
export const GROK_ISSUER_DEFAULT = "https://auth.grok.me";

/** Callback hosts reserved for the optional hosted preview integration. */
export const PREVIEW_ALLOWED_HOSTS = ["*.grok-sandbox.com"] as const;
