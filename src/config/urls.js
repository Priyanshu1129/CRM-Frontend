const urls = {
  // Dashboard Routes
  DASHBOARD_PIPE_VIEW: "/dashboards/pipe-view",
  DASHBOARD_FUNNEL_VIEW: "/dashboards/funnel-view",
  DASHBOARD_SUMMARY_VIEW: "/dashboards/summary-view",
  DASHBOARD_TREND_VIEW: "/dashboards/trend-view",
  DASHBOARD_LEADERBOARD: "/dashboards/leaderboard",

  // Tender Routes
  TENDER: "/tender",
  TENDER_ADD: "/tender/add-tender",
  TENDER_DETAILS: "/tender/tender-details/:id",
  TENDER_UPDATE: "/tender/update",

  // // Opportunity Routes
  // OPPORTUNITY: "/opportunity",
  // OPPORTUNITY_ADD: "/opportunity/add-opportunity",
  // OPPORTUNITY_DETAILS: "/opportunity/opportunity-details/:id",
  // OPPORTUNITY_UPDATE: "/opportunity/update",

  // deals Routes
  DEAL: "/deal",
  DEAL_ADD: "/deal/add-deal",
  DEAL_DETAILS: "/deal/deal-details/:id",
  DEAL_UPDATE: "/deal/update",

  // Client Routes
  CLIENT: "/client",
  CLIENT_ADD: "/client/add-client",
  CLIENT_DETAILS: "/client/client-details/:id",
  CLIENT_UPDATE: "/client/update",

  // Contact Routes
  CONTACT: "/contact",
  CONTACT_ADD: "/contact/add-contact",
  CONTACT_DETAILS: "/contact/contact-details/:id",
  CONTACT_UPDATE: "/contact/update",

  // Registration Routes
  REGISTRATION: "/registration",
  REGISTRATION_ADD: "/registration/add-registration",
  REGISTRATION_DETAILS: "/registration/registration-details/:id",
  REGISTRATION_UPDATE: "/registration/update",

  // Mention Routes (Business Development)
  LEAD: "/opportunity/lead/all-leads",
  LEAD_ADD: "/opportunity/lead/add-lead",
  // LEAD_DETAILS: "/opportunity/lead/lead-details/:id",
  // LEAD_UPDATE: "/opportunity/lead/update",

  // Mention Routes (Business Development)
  // INTERACTION: "/opportunity/interaction",
  INTERACTION_ADD: "/opportunity/interaction/add-interaction",
  // INTERACTION_DETAILS: "/opportunity/interaction/interaction-details/:id",
  // INTERACTION_UPDATE: "/opportunity/interaction/update",

  // Mention Routes (Business Development)
  MENTION: "/opportunity/mention/all-mentions",
  MENTION_ADD: "/opportunity/mention/add-mention",
  MENTION_DETAILS: "/opportunity/mention/mention-details/:id",
  MENTION_UPDATE: "/opportunity/mention/update",

  // User Routes
  USER: "/user",
  USER_ADD: "/user/add-user",
  USER_DETAILS: "/user/user-details/:roleId/:id",
  USER_UPDATE: "/user/update/:roleId",

  // Admin Routes
  ADMIN: "/admin",

  // Admin Configuration Routes
  ADMIN_CONFIGURATIONS: "/admin/configurations",
  ADMIN_CONFIGURATIONS_DETAILS: "/admin/configurations/details",
  ADMIN_CONFIGURATIONS_UPDATE: "/admin/configurations/update",
  ADMIN_CONFIGURATIONS_ADD: "/admin/configurations/add-configuration",
  ADMIN_CONFIGURATIONS_INDUSTRY: "/admin/configurations/industry",
  ADMIN_CONFIGURATIONS_SUB_INDUSTRY: "/admin/configurations/sub-industry",
  ADMIN_CONFIGURATIONS_SOLUTION: "/admin/configurations/solution",
  ADMIN_CONFIGURATIONS_SUB_SOLUTION: "/admin/configurations/sub-solution",
  ADMIN_CONFIGURATIONS_TERRITORY: "/admin/configurations/territory",
  ADMIN_CONFIGURATIONS_SALES_STAGE: "/admin/configurations/sales-stage",
  ADMIN_CONFIGURATIONS_SALES_SUB_STAGE: "/admin/configurations/sales-sub-stage",

  // Admin Roles and Permissions Routes
  ADMIN_ROLES_PERMISSIONS: "/admin/roles-permissions",
  ADMIN_ROLES_PERMISSIONS_ADD: "/admin/roles-permissions/add-role",
  ADMIN_ROLES_PERMISSIONS_DETAILS: "/admin/roles-permissions/role-details/:id",
  ADMIN_ROLES_PERMISSIONS_UPDATE: "/admin/roles-permissions/update",

  CHANGE_PASSWORD: "/change-password",
  MY_PROFILE: "/profile",
};

export default urls;
