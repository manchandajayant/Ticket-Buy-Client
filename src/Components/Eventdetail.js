import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Eventdetail extends Component {
  render() {
    console.log("bllue", this.props);
    if (!this.props.event) {
      return <h1>No tickets yet</h1>;
    } else {
      const b = this.props.ticket.filter(
        n => n.eventId === this.props.event.event.id
      );
      console.log("b", b);
      return (
        <div>
          <Link to="/">HOMEPAGE</Link>
          <h1>{this.props.event.event.name}</h1>
          <h3>DESCRIPTION: {this.props.event.event.description}</h3>
          <img src={this.props.event.event.url} />
          <h4>START DATE: {this.props.event.event.startDate}</h4>
          <h4>END DATE: {this.props.event.event.endDate}</h4>

          <div>
            <h1>{this.props.event.event.name}</h1>
            {b.map(a => (
              <div>
                <ul>
                  <li>
                    <Link to={`/events/${a.eventId}/tickets/${a.id}`}>
                      PRICE - {a.price} BY USER - {a.userId}
                    </Link>
                  </li>
                </ul>
                {/* <p>{a.user.email}</p> */}
              </div>
            ))}

            {/* <p>{b.id}</p> */}

            {/* <p>{b.price}</p> */}
            {/* {this.props.ticket.map(n=> {
              const nfilter(new=>new.id==this.props.event.event.id)
            <p>{}</p>
            })} */}

            {/* {bl.map(tick => (
              <p>{tick.price}</p>
            ))} */}

            {/* {this.props.event.event.tickets.map(d => {
              return (
                <li>
                  <ul>
                    <Link to={`/users/${d.userId}`}>Ticket by</Link>
                    {d.price}
                  </ul>
                  <p>
                    <Link to={`/tickets/${d.id}`}>
                      Click to open the Ticket
                    </Link>
                  </p>
                </li>
              );
            })} */}
          </div>
        </div>
      );
    }
  }
}
