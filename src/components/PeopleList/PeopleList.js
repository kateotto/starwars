import React, {useState} from 'react';
import styles from './PeopleList.module.css';
import PersonInformation from '../PersonInformation/PersonInformation';


function PeopleList(props) {
    const currentPerson = props;
    const [personData, setPersonData] = useState([]);
    const [changeStyle, setChangeStyle] = useState('100%');

    let style = {
      width: changeStyle,
      transition: '0.5s ease-in-out width'
    }

    const getMore = (data) => {
      setPersonData(data);
      setChangeStyle('70%');
    }

        return (
          <div className={styles.personWrapper}>
            {currentPerson.person.map((el, index) => 
              <div
              className={styles.listWrapper}
              key={index}
              style={style}
              >
              <span 
              className={styles.nameWrapper}
              >
              {el.name}
              </span>
                <br/>
                <button 
                className={styles.listButton}
                onClick={() => getMore(el)}
                >
                  SHOW MORE
                </button>
              </div>
            )}
            <PersonInformation props={personData}/>
            </div>
        )
}
export default PeopleList;