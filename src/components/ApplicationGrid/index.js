import React, { Component, useState } from "react";
import Paper from '@material-ui/core/Paper';
import {
    SearchState,
    IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    Toolbar,
    SearchPanel,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';

import {
    getAllApplications
} from '../../utils/API/index.js';

// columns = [
//     { name: 'name', title: 'Name' },
//     { name: 'age', title: 'Age' },
//     { name: 'applicationdatetime', title: 'Application Date/Time' },
//     { name: 'school', title: 'School'},
//     { name: 'year', title: 'Year'},
//     { name: 'program', title: 'Degree'},
//     { name: 'graduationyear', title: 'Graduation Year'},
//     { name: 'stream', title: 'Stream'},
//     { name: 'currentawrstatus', title: 'Current AWR Status'},
//     { name: 'rsvpstatus', title: 'RSVP Status'}
// ];
// rows =  [
//     { name: 'Alice Li', 
//         age: '19', 
//         applicationdatetime: '2021-Feb-25',
//         school: 'University of Waterloo',
//         year: '2024',
//         program: 'CSBBA',
//         graduationyear: 'Grad Year',
//         stream: 'Sequence 1',
//         currentawrstatus: 'Approved',
//         rsvpstatus: 'RSVP'
//     },
//     { name: 'Wen Zhang', 
//         age: '19', 
//         applicationdatetime: '2021-Feb-25',
//         school: 'University of Waterloo',
//         year: '2024',
//         program: 'CSBBA',
//         graduationyear: 'Grad Year',
//         stream: 'Sequence 2',
//         currentawrstatus: 'Rejected',
//         rsvpstatus: 'RSVP'
//     },
//     { name: 'Also Alice Li', 
//         age: '19', 
//         applicationdatetime: '2021-Feb-25',
//         school: 'Wilfrid Laurier University',
//         year: '2024',
//         program: 'CSBBA',
//         graduationyear: 'Grad Year',
//         stream: 'Sequence 3',
//         currentawrstatus: 'Awaiting',
//         rsvpstatus: 'RSVP'
//     }
// ];

export default class ApplicationGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: []
        };
    }

    componentDidMount = () => {
        getAllApplications(
            (data) => {
                console.log(data);
                this.setState({
                    columns: [
                        { name: 'first_name', title: 'First Name' },
                        { name: 'last_name', title: 'Last Name' },
                        { name: 'Gender', title: 'Gender' },
                        { name: 'birth_date', title: 'Birth Date' },
                        { name: 'coop_terms', title: 'Coop Terms' },
                        { name: 'date_submitted', title: 'Date Submitted'},
                        { name: 'degree', title: 'Degree'},
                        { name: 'email', title: 'Email'},
                        { name: 'enthnicity', title: 'Ethnicity'},
                        { name: 'github_url', title: 'Github Url'},
                        { name: 'how_heard', title: 'How Heard'},
                        { name: 'num_hackathons', title: 'Number of Hackathons'},
                        { name: 'submitted', title: 'Submitted' }
                    ],
                    rows: data.Items
                });
            },
            () => {}
        );
    };

    render() {
        return (
            <Paper>
                <Grid
                    rows={this.state.rows}
                    columns={this.state.columns}
                >
                    <SearchState defaultValue="" />
                    <IntegratedFiltering />
                    <Table />
                    <TableHeaderRow />
                    <Toolbar />
                    <SearchPanel />
                </Grid>
            </Paper>
        );
    }
}
