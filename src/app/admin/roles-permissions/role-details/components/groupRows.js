// export const groupedPermissionEntities = permissionEntities.map((entity) => {
//   let group = "";
//   switch (entity.entity) {
//     case "BULK UPLOAD":
//       group = "Group 1: Bulk Upload";
//       break;
//     case "CLIENT":
//     case "CONTACT":
//     case "OPPORTUNITY":
//     case "REGISTRATION":
//     case "TENDER":
//     case "TEAM":
//       group = "Group 2: Client, Contact, Deal, Registration, Tender, Team";
//       break;
//     case "INTERACTION":
//     case "BUSINESS DEVELOPMENT":
//     case "LEAD":
//       group = "Group 3: Interaction, Mention, Lead";
//       break;
//     case "FUNNEL VIEW":
//     case "SUMMARY VIEW":
//     case "PIPE VIEW":
//     case "LEADERBOARD":
//     case "TREND VIEW":
//       group =
//         "Group 4: Funnel View, Summary View, Pipe View, Leaderboard, Trend View";
//       break;
//     case "CONFIGURATION":
//     case "TARGET":
//       group = "Group 5: Configuration, Set Target";
//       break;
//     default:
//       group = "Other";
//       break;
//   }
//   return { ...entity, group };
// });
