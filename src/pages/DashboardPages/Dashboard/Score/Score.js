import React from 'react'
import './Score.scss'
function Score() {
    return (
        <React.Fragment>
            <div style={{marginLeft:'-13px'}} className="score">
                <div className="row">
                    <div className="col-md-7">
                        <div className="Scorecard">
                            <h4>Overall Score</h4>
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td className="name">Impess</td>
                                        <td><img src="/images/score6.svg" alt="score" /></td>
                                        <td>129</td>
                                    </tr>
                                    <tr>
                                        <td className="name">Click</td>
                                        <td><img src="/images/score5.svg" alt="score" /></td>
                                        <td>5k</td>
                                    </tr>
                                    <tr>
                                        <td className="name">Sales</td>
                                        <td><img src="/images/score4.svg" alt="score" /></td>
                                        <td>99</td>
                                    </tr>
                                    <tr>
                                        <td className="name">Conver</td>
                                        <td><img src="/images/score3.svg" alt="score" /></td>
                                        <td>22</td>
                                    </tr>
                                    <tr>
                                        <td className="name">Leads</td>
                                        <td><img src="/images/score2.svg" alt="score" /></td>
                                        <td>129</td>
                                    </tr>
                                    <tr>
                                        <td className="name">CTR</td>
                                        <td><img src="/images/score1.svg" alt="score" /></td>
                                        <td>222</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div className="Docscard">
                            <h4>Recent Docs</h4>
                            <table className="table table-borderless">
                            <thead>
                                <tr>
                                <th>FILE</th>
                                <th>OWNER</th>
                                <th>UPlOAD</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td>Homer & Marge</td>
                                        <td>Me</td>
                                        <td>3:09pm</td>
                                    </tr>
                                    <tr>
                                        <td>Homer & Marge</td>
                                        <td>Me</td>
                                        <td>3:09pm</td>
                                    </tr>
                                    <tr>
                                        <td>Homer & Marge</td>
                                        <td>Me</td>
                                        <td>3:09pm</td>
                                    </tr>
                                    <tr>
                                        <td>Homer & Marge</td>
                                        <td>Me</td>
                                        <td>3:09pm</td>
                                    </tr>
                                    <tr>
                                        <td>Homer & Marge</td>
                                        <td>Me</td>
                                        <td>3:09pm</td>
                                    </tr>
                                    <tr>
                                        <td>Homer & Marge</td>
                                        <td>Me</td>
                                        <td>3:09pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Score
