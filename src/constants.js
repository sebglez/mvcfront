export const ROUTES = {
  LOGIN: { ROUTE: "/login", NAME: "Login" },
  SIGNUP: { ROUTE: "/signup", NAME: "Sign up" },
  DASHBOARD: { ROUTE: "/dashboard", NAME: "dashboard" },
  PRODUCTS: { ROUTE: "/dashboard/items", NAME: "Items" },
  ADDPRODUCT: { ROUTE: "/dashboard/items/add", NAME: "Add Product" },
  EDITPRODUCT: { ROUTE: `/dashboard/items/edit/:id`, NAME: "Edit Product" },
  GETPRODUCT: { ROUTE: "/item/:id", NAME: "Get Product" },
  USERS: { ROUTE: "/dashboard/users", NAME: "Users" },
  GETUSER: { ROUTE: "/dashboard/users/:id", NAME: "Get User" },
  PROFILE: { ROUTE: "/profile", NAME: "Profile" },
  EDITPROFILE: { ROUTE: "/editprofile/:id", NAME: "Edit Profile" },
};