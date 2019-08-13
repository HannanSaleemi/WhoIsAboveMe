import React, { Component } from "react";
import "../assets/styles/_header.scss";

export default class Header extends Component {

    getCurrentUTCTime = () => {
        var date = new Date();
        return `${date.getUTCHours()}:${date.getUTCMinutes()}`;
    };

    render() {

        return (
            <div className="site-nav">
                <header className="main-header">
                    <div className="custom-container">
                        <div className="logo-wrap">
                            <div className="logo">
                                WhoIsAboveMe
                            </div>
                        </div>

                        <div className="float-r">
                            <div className="flex-row-container">
                                <div className="header-plane-stats">
                                    IN AIR: 000
                                </div>
                                
                                <div className="header-utc-time">
                                    UTC {this.getCurrentUTCTime()}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}