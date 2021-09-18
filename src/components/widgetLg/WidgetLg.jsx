import "./widgetLg.css"

export default function WidgetLg() {
    
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{ type }</button>
    }
    
    return (
        <div className="widgetSm">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.gq-magazine.co.uk/photos/5dee78842581af00087d5080/3:4/w_1704,h_2272,c_limit/GettyImages-1147418742.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Harry Styles</span>
                    </td>
                    <td className="widgetLgData">17 Sep 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.gq-magazine.co.uk/photos/5dee78842581af00087d5080/3:4/w_1704,h_2272,c_limit/GettyImages-1147418742.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Harry Styles</span>
                    </td>
                    <td className="widgetLgData">17 Sep 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.gq-magazine.co.uk/photos/5dee78842581af00087d5080/3:4/w_1704,h_2272,c_limit/GettyImages-1147418742.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Harry Styles</span>
                    </td>
                    <td className="widgetLgData">17 Sep 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
            </table>
        </div>
    )
}
