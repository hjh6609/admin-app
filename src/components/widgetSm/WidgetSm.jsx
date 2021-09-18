import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <span className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://w.namu.la/s/9f07433702bd9d9a819d3a216bdd62ab402354e3bfe191b7b746bc1947ffc004335dd015604f5bc02489b83df71d57778666af2ef26ae5786bf67dc96588f7dd2aecbd8017d618ecd1844d0bbea7e4175637c584ccebc7f54456f1f27501b2e3" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jaeminn N</span>
                        <span className="widgetSmUserTitle">Idol singer of NCT-DTEAM</span>
                    </div>
                    <button className="widgetSmbutton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://w.namu.la/s/9f07433702bd9d9a819d3a216bdd62ab402354e3bfe191b7b746bc1947ffc004335dd015604f5bc02489b83df71d57778666af2ef26ae5786bf67dc96588f7dd2aecbd8017d618ecd1844d0bbea7e4175637c584ccebc7f54456f1f27501b2e3" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jaeminn N</span>
                        <span className="widgetSmUserTitle">Idol singer of NCT-DTEAM</span>
                    </div>
                    <button className="widgetSmbutton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </span>
        </div>
    )
}
