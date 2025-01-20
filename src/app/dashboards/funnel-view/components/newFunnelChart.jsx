"use client"; // For Next.js client-side rendering

import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Card } from "antd";

// const HorizontalFunnelChart = ({ funnelStats }) => {



//   const colors = [
//     "rgba(229, 39, 114, 0.5)",
//     "rgba(248, 96, 65, 0.8)",
//     "rgba(255, 166, 70, 0.8)",
//     "rgba(0, 199, 180, 0.8)",
//     "rgba(72, 181, 194, 0.8)",
//     "rgba(0, 124, 166, 0.8)",
//   ];

//   useLayoutEffect(() => {
//     if (!funnelStats) return null;
//     let root = am5.Root.new("chartdiv");

//     // Apply themes
//     root.setThemes([am5themes_Animated.new(root)]);


//     const data = Object.keys(funnelStats).map((key) => {
//       return { name: `${key}`, value: funnelStats[key] };
//     });

//     // Create chart
//     let chart = root.container.children.push(
//       am5percent.SlicedChart.new(root, {
//         orientation: "horizontal",
//         height: 300,
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
//         y: am5.percent(110), // Adjust y position for spacing
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
//   }, [colors]);


//   return (
//     <Card>
//       <div id="chartdiv" style={{ width: "100%", height: "350px" }} />
//     </Card>
//   );
// };
const HorizontalFunnelChart = ({ funnelStats }) => {
  const colors = [
    "rgba(229, 39, 114, 0.5)",
    "rgba(248, 96, 65, 0.8)",
    "rgba(255, 166, 70, 0.8)",
    "rgba(0, 199, 180, 0.8)",
    "rgba(72, 181, 194, 0.8)",
    "rgba(0, 124, 166, 0.8)",
  ];

  useLayoutEffect(() => {
    if (!funnelStats) return; // Avoid rendering logic if data is missing

    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    const data = Object.keys(funnelStats).map((key) => ({
      name: `${key}`,
      value: funnelStats[key],
    }));

    let chart = root.container.children.push(
      am5percent.SlicedChart.new(root, {
        orientation: "horizontal",
        height: 300,
      })
    );

    let customColors = am5.ColorSet.new(root, {
      colors: colors.map((color) => am5.color(color)),
      step: 1,
    });

    let series = chart.series.push(
      am5percent.FunnelSeries.new(root, {
        orientation: "horizontal",
        valueField: "value",
        categoryField: "name",
        alignLabels: false,
      })
    );

    series.set("colors", customColors);
    series.data.setAll(data);

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: am5.percent(110),
        layout: root.horizontalLayout,
      })
    );

    legend.data.setAll(series.dataItems);

    legend.labels.template.setAll({
      text: "{category}",
      fill: am5.color("#555"),
    });

    legend.markers.template.setAll({
      width: 20,
      height: 20,
    });

    return () => {
      root.dispose();
    };
  }, [colors, funnelStats]); // Add `funnelStats` as a dependency

  // Render a fallback if `funnelStats` is not available
  if (!funnelStats) {
    return (
      <Card>
        <div style={{ textAlign: "center", padding: "20px" }}>
          No data available for the chart.
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div id="chartdiv" style={{ width: "100%", height: "350px" }} />
    </Card>
  );
};


export default HorizontalFunnelChart