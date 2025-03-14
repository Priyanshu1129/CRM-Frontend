import urls from "./urls";

const breadcrumbNames = {
  // Dashboard Routes
  [urls.DASHBOARD_PIPE_VIEW]: ["Home", "Live Metrics", "Pipe View"],
  [urls.DASHBOARD_FUNNEL_VIEW]: ["Home", "Live Metrics", "Funnel View"],
  [urls.DASHBOARD_SUMMARY_VIEW]: ["Home", "Live Metrics", "Summary View"],
  [urls.DASHBOARD_TREND_VIEW]: ["Home", "Live Metrics", "Trend View"],
  [urls.DASHBOARD_LEADERBOARD]: ["Home", "Live Metrics", "Leaderboard"],

  // Tender Routes
  [urls.TENDER]: ["Home", "Tenders"],
  [urls.TENDER_ADD]: ["Home", "Tenders", "Add Tender"],
  [urls.TENDER_DETAILS]: ["Home", "Tenders", "Tender Details"],

  // Opportunity Routes
  [urls.DEAL]: ["Home", "Deals"],
  [urls.DEAL_ADD]: ["Home", "Deals", "Add Deal"],
  [urls.DEAL_DETAILS]: ["Home", "Deals", "Deal Details"],

  // Client Routes
  [urls.CLIENT]: ["Home", "Clients"],
  [urls.CLIENT_ADD]: ["Home", "Clients", "Add Client"],
  [urls.CLIENT_DETAILS]: ["Home", "Clients", "Client Details"],

  // Contact Routes
  [urls.CONTACT]: ["Home", "Contacts"],
  [urls.CONTACT_ADD]: ["Home", "Contacts", "Add Contact"],
  [urls.CONTACT_DETAILS]: ["Home", "Contacts", "Contact Details"],

  // Registration Routes
  [urls.REGISTRATION]: ["Home", "Registrations"],
  [urls.REGISTRATION_ADD]: ["Home", "Registrations", "Add Registration"],
  [urls.REGISTRATION_DETAILS]: [
    "Home",
    "Registrations",
    "Registration Details",
  ],

  // Mention Routes (Business Development)
  [urls.LEAD]: ["Home", "Opportunities", "Leads"],
  [urls.LEAD_ADD]: ["Home", "Opportunities", "Leads", "Add Lead"],

  // Mention Routes (Business Development)

  [urls.INTERACTION_ADD]: [
    "Home",
    "Opportunities",
    "Interactions",
    "Add Interaction",
  ],

  // Mention Routes (Business Development)
  [urls.MENTION]: ["Home", "Opportunities", "Mentions"],
  [urls.MENTION_ADD]: ["Home", "Opportunities", "Mentions", "Add Mention"],
  [urls.MENTION_DETAILS]: [
    "Home",
    "Opportunities",
    "Mentions",
    "Mention Details",
  ],

  // User Routes
  [urls.USER]: ["Home", "Team"],
  [urls.USER_ADD]: ["Home", "Team", "Add Member"],
  [urls.USER_DETAILS]: ["Home", "Team", "Member Details"],

  // Admin Routes
  [urls.ADMIN]: ["Home", "Admin"],

  // Admin Configuration Routes
  [urls.ADMIN_CONFIGURATIONS]: ["Home", "Admin", "Configurations"],
  [urls.ADMIN_CONFIGURATIONS_ADD]: [
    "Home",
    "Admin",
    "Configurations",
    "Add Configuration",
  ],
  [urls.ADMIN_CONFIGURATIONS_INDUSTRY]: [
    "Home",
    "Admin",
    "Configurations",
    "Industry",
  ],
  [urls.ADMIN_CONFIGURATIONS_SUB_INDUSTRY]: [
    "Home",
    "Admin",
    "Configurations",
    "Sub Industry",
  ],
  [urls.ADMIN_CONFIGURATIONS_SOLUTION]: [
    "Home",
    "Admin",
    "Configurations",
    "Solution",
  ],
  [urls.ADMIN_CONFIGURATIONS_SUB_SOLUTION]: [
    "Home",
    "Admin",
    "Configurations",
    "Sub Solution",
  ],
  [urls.ADMIN_CONFIGURATIONS_TERRITORY]: [
    "Home",
    "Admin",
    "Configurations",
    "Territory",
  ],
  [urls.ADMIN_CONFIGURATIONS_SALES_STAGE]: [
    "Home",
    "Admin",
    "Configurations",
    "Sales Stage",
  ],
  [urls.ADMIN_CONFIGURATIONS_SALES_SUB_STAGE]: [
    "Home",
    "Admin",
    "Configurations",
    "Sales Sub Stage",
  ],

  // Admin Roles and Permissions Routes
  [urls.ADMIN_ROLES_PERMISSIONS]: ["Home", "Admin", "Roles and Permissions"],
  [urls.ADMIN_ROLES_PERMISSIONS_ADD]: [
    "Home",
    "Admin",
    "Roles and Permissions",
    "Add Role",
  ],
  [urls.ADMIN_ROLES_PERMISSIONS_DETAILS]: [
    "Home",
    "Admin",
    "Roles and Permissions",
    "Role Details",
  ],

  [urls.MY_PROFILE]: ["Home", "Profile"],
  [urls.CHANGE_PASSWORD]: ["Home", "Change Password"],
};

export default breadcrumbNames;
