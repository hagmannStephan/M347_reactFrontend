export async function getBusinessTrips() {
  const response = await fetch("https://m347backendapi-hagmannstephans-projects.vercel.app/businessTrips");
  if (response.ok) return response.json();
  throw response;
}
export async function getWishlistItems() {
  // fetch wishlists from api
  const response = await fetch("https://m347backendapi-hagmannstephans-projects.vercel.app/flights");
  if (response.ok) return response.json();
  throw response;
}
