// // "use client"; // For Next.js client-side rendering

// // import React, { useLayoutEffect } from "react";
// // import * as am5 from "@amcharts/amcharts5";
// // import * as am5percent from "@amcharts/amcharts5/percent";
// // import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// // const HorizontalFunnelChart = ({ data }) => {
// //   const colors = [
// //     "rgba(229, 39, 114, 0.8)",
// //     "rgba(248, 96, 65, 0.8)",
// //     "rgba(255, 166, 70, 0.8)",
// //     "rgba(0, 199, 180, 0.8)",
// //     "rgba(72, 181, 194, 0.8)",
// //     "rgba(0, 124, 166, 0.8)",
// //   ];

// //   useLayoutEffect(() => {
// //     let root = am5.Root.new("chartdiv");

// //     // Apply themes
// //     root.setThemes([am5themes_Animated.new(root)]);

// //     // Create chart
// //     let chart = root.container.children.push(
// //       am5percent.SlicedChart.new(root, {
// //         orientation: "horizontal",
// //       })
// //     );

// //     // Create a custom ColorSet with your colors
// //     let customColors = am5.ColorSet.new(root, {
// //       colors: colors.map((color) => am5.color(color)),
// //       step: 1,
// //     });

// //     // Add series
// //     let series = chart.series.push(
// //       am5percent.FunnelSeries.new(root, {
// //         orientation: "horizontal",
// //         valueField: "value",
// //         categoryField: "name",
// //         alignLabels: false
// //       })
// //     );

// //     // Apply the custom ColorSet
// //     series.set("colors", customColors);

// //     // Set data
// //     series.data.setAll(data);
  

// //     return () => {
// //       root.dispose(); // Cleanup
// //     };
// //   }, [data, colors]);

// //   return <div id="chartdiv" style={{ width: "100%", height: "400px" }} />;
// // };

// // export default HorizontalFunnelChart;

// "use client"; // For Next.js client-side rendering

// import React, { useLayoutEffect } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5percent from "@amcharts/amcharts5/percent";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import { Card } from "antd";

// const HorizontalFunnelChart = ({ data }) => {
//   const colors = [
//     "rgba(229, 39, 114, 0.8)",
//     "rgba(248, 96, 65, 0.8)",
//     "rgba(255, 166, 70, 0.8)",
//     "rgba(0, 199, 180, 0.8)",
//     "rgba(72, 181, 194, 0.8)",
//     "rgba(0, 124, 166, 0.8)",
//   ];

//   useLayoutEffect(() => {
//     let root = am5.Root.new("chartdiv");

//     // Apply themes
//     root.setThemes([am5themes_Animated.new(root)]);

//     // Create chart
//     let chart = root.container.children.push(
//       am5percent.SlicedChart.new(root, {
//         orientation: "horizontal",
//       })
//     );

//     // Create a custom ColorSet with your colors
//     let customColors = am5.ColorSet.new(root, {
//       colors: colors.map((color) => am5.color(color)),
//       step: 1,
//     });

//     // Add series
//     let series = chart.series.push(
//       am5percent.FunnelSeries.new(root, {
//         orientation: "horizontal",
//         valueField: "value",
//         categoryField: "name",
//         alignLabels: false,
//       })
//     );

//     // Apply the custom ColorSet
//     series.set("colors", customColors);

//     // Set data
//     series.data.setAll(data);

//     // Add legend
//     let legend = chart.children.push(
//       am5.Legend.new(root, {
//         centerX: am5.percent(50),
//         x: am5.percent(50),
//         y: am5.percent(100),
//         layout: root.horizontalLayout,
//       })
//     );

//     // Set legend data from the series
//     legend.data.setAll(series.dataItems);

//     // Customize legend labels
//     legend.labels.template.setAll({
//       text: "{category}",
//       fill: am5.color("#555"), // Darker text color
//     });

//     // Customize legend markers
//     legend.markers.template.setAll({
//       width: 20,
//       height: 20,
//     });

//     return () => {
//       root.dispose(); // Cleanup
//     };
//   }, [data, colors]);


//   return (<Card>
//   <div id="chartdiv" style={{ width: "100%", height: "300px" }} />;
//   </Card>)
// };

// export default HorizontalFunnelChart;

"use client"; // For Next.js client-side rendering

import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Card } from "antd";


const HorizontalFunnelChart = ({ funnelStats }) => {
    if(!funnelStats) return null;
    
        const data = Object.keys(funnelStats).map((key)=>{
            return { name : `${key}`, value : funnelStats[key] }
        })

        console.log("formated data -----", data)

    // const data = [
    //   { name: "Stage 1", value: 100 },
    //   { name: "Stage 2", value: 80 },
    //   { name: "Stage 3", value: 60 },
    //   { name: "Stage 4", value: 40 },
    //   { name: "Stage 5", value: 20 },
    //   { name: "Stage 6", value: 10 },
    // ];

  const colors = [
    "rgba(229, 39, 114, 0.5)",
    "rgba(248, 96, 65, 0.8)",
    "rgba(255, 166, 70, 0.8)",
    "rgba(0, 199, 180, 0.8)",
    "rgba(72, 181, 194, 0.8)",
    "rgba(0, 124, 166, 0.8)",
  ];

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    // Apply themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5percent.SlicedChart.new(root, {
        orientation: "horizontal",
        height : 300
      })
    );

    // Create a custom ColorSet with your colors
    let customColors = am5.ColorSet.new(root, {
      colors: colors.map((color) => am5.color(color)),
      step: 1,
    });

    // Add series
    let series = chart.series.push(
      am5percent.FunnelSeries.new(root, {
        orientation: "horizontal",
        valueField: "value",
        categoryField: "name",
        alignLabels: false,
      })
    );

    // Apply the custom ColorSet
    series.set("colors", customColors);

    // Set data
    series.data.setAll(data);

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: am5.percent(110), // Adjust y position for spacing
        layout: root.horizontalLayout,
      })
    );

    // Set legend data from the series
    legend.data.setAll(series.dataItems);

    // Customize legend labels
    legend.labels.template.setAll({
      text: "{category}",
      fill: am5.color("#555"), // Darker text color
    });

    // Customize legend markers
    legend.markers.template.setAll({
      width: 20,
      height: 20,
    });

    return () => {
      root.dispose(); // Cleanup
    };
  }, [data, colors]);

  return (
    <Card>
      <div id="chartdiv" style={{ width: "100%", height: "350px" }} />
    </Card>
  );
};

export default HorizontalFunnelChart;
