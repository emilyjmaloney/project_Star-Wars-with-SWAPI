import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="d-flex flex-nowrap overflow-auto">
			{store.people.map((item, index) => {
				return <Card title={item.name} description={item.eye_color} key={index} />;
			})}
		</div>
	);
};
