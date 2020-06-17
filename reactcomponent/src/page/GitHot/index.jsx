import React, { Component } from 'react';
import Request from '../../config/Fetch';
import CONSTURL from '../../config/ConstUrl';
import GitItem from './GitItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';
class GitHot extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allList: [],
            flag: false,
            target: props.target
        }
    }

    async componentDidMount () {
        let { allList, target } = this.state;
        if( target ) {
            switch(target) {
                case 'ALL' : target = CONSTURL.ALL; break;
                case 'JAVASCRIPT' : target = CONSTURL.JAVASCRIPT; break;
                case 'RUBY' : target = CONSTURL.RUBY; break;
                case 'JAVA' : target = CONSTURL.JAVA; break;
                case 'CSS' : target = CONSTURL.CSS; break;
                default : target = CONSTURL.ALL
            }
        } else {
            target = CONSTURL.ALL;
        }
        await Request.get(target)
        .then((res)=>{
            if( !allList || allList.length === 0){
                this.setState({
                    allList: res.data.items
                })
            }
        })
    }

    render() { 
        const { allList } = this.state;
        const number_format = (num) => {
            return num && num
            .toString()
            .replace(/(^|\s)\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
        }
        const mainDivStyle = {
            position: "relative", 
            width: "100%", 
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
        }
        const iconStyle = {
            position: "relative",
            top: "50px",
            fontSize: "32px",
            fontSWeight: "bold",
            color: 'black'
        }
        return ( 
            <div style = { mainDivStyle }>
                {
                    allList.length !== 0 ? allList.map((item, index)=>{
                        return <GitItem 
                                    order = { index + 1 }
                                    key = { item.id } 
                                    name = { item.name } 
                                    stargazersCount = {number_format(item.stargazers_count) } 
                                    forksCount = { number_format(item.forks_count)  } 
                                    openIssuesCount = { number_format(item.open_issues_count)  } 
                                    htmlUrl = { item.html_url } 
                                    avatar = { item.owner.avatar_url }
                                />;
                    }) : <FontAwesomeIcon icon = { faSpinner } style = { iconStyle } />
                }
            </div> 
        );
    }
}
 
export default GitHot;
