import React, { Component } from "react";
import styles from "./Wrapper.module.css";
import Pagination from "../Pagination/Pagination";
import PeopleList from "../PeopleList/PeopleList";
const APIdata = "https://swapi.co/api/people?page=";
const names = [];

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      currentPage: props.match.params.id || 1,
      peoplePerPage: 10
    };
  }

  async getDetail(apiURL) {
    try {
      let response = await fetch(apiURL);
      response = await response.json();
      this.showDetail(response);
    } catch (error) {
      console.log(error);
    }
  }

  showDetail = async data => {
    for (let i = 0; i < data.results.length; i++) {
      await names.push(data.results[i]);
    }
    if (data.next) {
      await this.getDetail(data.next);
    } else {
      this.setState({
        people: names
      });
    }
  };

  componentDidMount() {
    this.getDetail(APIdata);
  }

  componentDidUpdate() {
    window.onpopstate  = () => {
      this.setState({currentPage: this.props.match.params.id })
    }
  }

  render() {
    const indexOfLastPerson = this.state.currentPage * this.state.peoplePerPage;
    const indexOfFirstPerson = indexOfLastPerson - this.state.peoplePerPage;
    const currentPerson = this.state.people.slice(
      indexOfFirstPerson,
      indexOfLastPerson
    );
    const paginate = pageNumber => {
      this.setState({ currentPage: pageNumber });
    };
    if (!this.state.people.length) {
      return <div className={styles.loader}>Ładowanie danych</div>;
    }
    return (
      <div className={styles.wrapper}>
        <PeopleList person={currentPerson} />
        <Pagination
          peoplePerPage={this.state.peoplePerPage}
          totalPeople={this.state.people.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default Wrapper;

