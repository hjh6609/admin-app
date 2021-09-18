import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
//import React, { useState,useEffect } from "react";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
    
    // const [test, setTest] = useState([]);

    // useEffect(() => {
    //     setTest(userData);
    //     console.log(test);
    // })

    return (
        <div className="home">
            <FeaturedInfo />
            <Chart
                data={userData}
                title="User Analytics"
                grid dataKey="Active User"
            />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
