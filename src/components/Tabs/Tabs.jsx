import React, { PureComponent } from "react";

export class Tabs extends PureComponent {
    state = {
        activTabIdx : 0,
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevState :' ,prevState.activTabIdx,'nextState :', this.state.activTabIdx);
    }

    setActivTabIdx = idx => {
        this.setState({activTabIdx : idx});
    }

    render() {
        const { activTabIdx } = this.state;
        const { item } = this.props;
        const activeTab = item[activTabIdx];

        return (
            <div>
                {item.map(({label}, idx)=> {
                    // console.log(index);
                    return <button 
                        key={label}
                        type="button"
                        onClick={()=> this.setActivTabIdx(idx)}
                    >
                        {label}
                    </button>
                })}
            <div>
                <h2>{activeTab.label}</h2>
                <p>{activeTab.content}</p>
            </div>
            </div>
        );
    }
}