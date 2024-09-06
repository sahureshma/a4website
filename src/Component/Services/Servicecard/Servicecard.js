import React from 'react';
import './Servicecard.css';
import { v4 as uuidv4 } from "uuid";
import Card from '../Servicecardcrousel/Servicecardcrousel';
import Carroussel from '../Crousel';

export default function Servicecard() {
    let cards = [
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
          )
        }
    ];

    return (
        <div className="servicecontainer">
            <Carroussel
                cards={cards}
                height="700px"
                width="100%"
                margin="0 auto"
                offset={200}
                showArrows={false}
            />
            
        </div>
    );
}