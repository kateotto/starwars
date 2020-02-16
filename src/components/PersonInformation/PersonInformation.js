import React from 'react';
import styles from './PersonInformation.module.css';

export default function PersonInformation(props) {

  if ( props.props.length === 0) {
      return null
  }
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.infoDetail}>
                <div><b>Name: </b> {props.props.name}</div>
                <div><b>Gender: </b> {props.props.gender}</div>
                <div><b>Hair color: </b> {props.props.hair_color}</div>
                <div><b>Skin color: </b> {props.props.skin_color}</div>
                <div><b>Eyes color: </b> {props.props.eye_color}</div>
                <div><b>Height: </b> {props.props.height}</div>
            </div>                
        </div>
    )
}