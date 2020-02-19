import React from "react";
import { connect } from "react-redux";
import {IState} from "./redux/store";

function StarwarsCharacter(props: { id: string, data: any }) {
    const { id, data } = props;

    return (
        <div>
            <p>Id = {id}</p>
            <p>Hair Color = {data.hair_color}</p>
            <p>Name = {data.name}</p>
        </div>
    )

}

function mapStateToProps(state: IState) {
    return {
        id: state.starwarsCharacter.id,
        data: state.starwarsCharacter.data || {},
    }
}

export default connect(mapStateToProps)(StarwarsCharacter);
