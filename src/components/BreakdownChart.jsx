import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box, Typography} from '@mui/material'
import { useGetSalesQuery } from 'state/api'

const BreakdownChart = () => {
  const { data, isLoading } = useGetSalesQuery();
 console.log(data)
  if (!data || isLoading) return "Loading...";

  const colors = [
    "#FF5630",
    "#00AB55",
    "#00B8D9",
    "#FFAB00",
  ]
  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, sales], i) => ({
        id:category,
        label:category,
        value:sales,
        color: colors[i],
    })
  )
  console.log(formattedData)

  return (
    <Box height="420px" minHeight="325px"
    minWidth="325px"
    position="relative"
    width="420px"
    >
             <ResponsivePie
        data={formattedData}
        theme={{
            axis: {
              domain: {
                line: {
                  stroke: 'orange',
                },
              },
              legend: {
                text: {
                  fill: 'orange',
                },
              },
              ticks: {
                line: {
                  stroke: 'orange',
                  strokeWidth: 1,
                },
                text: {
                  fill: 'orange',
                },
              },
            },
            legends: {
              text: {
                fill: 'orange',
              },
            },
            tooltip: {
              container: {
                color: 'black',
              },
            },
          }}
        colors={{ datum: 'data.color' }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.8}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 20,
                translateY: 56,
                itemsSpacing: 10,
                itemWidth: 85,
                itemHeight: 30,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
          <Box
        position="absolute"
        top="40%"
        left="39%"
        color="black"
        textAlign="center"
        pointerEvents="none">
        <Typography variant="h6">
           Total : <br/><Box fontSize="25px" fontWeight="bold">${data.yearlySalesTotal}</Box>
        </Typography>
      </Box>
    </Box>
  )
}

export default BreakdownChart