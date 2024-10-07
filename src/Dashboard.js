// src/Dashboard.js

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
  PieChart, Pie, Cell,
  ResponsiveContainer
} from 'recharts';
import { Grid, Paper, Typography } from '@mui/material';
import {
  userActivityData,
  userSignUpData,
  userDemographicsData,
  userEngagementData,
} from './userActivityData';

// Colors for the Pie Chart
const COLORS = ['violet', 'blue', 'green', 'yellow', 'orange', 'red'];

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: 'grey'}}>
      <Typography variant="h4" gutterBottom>
        Sign^4What?
      </Typography>
      <Grid container spacing={3}>
        {/* Line Chart: Active Users Over the Week */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', backgroundColor: 'lightgray' }}>
            <Typography variant="h6" gutterBottom>
              Active Users
            </Typography>
            <Typography variant="body2" gutterBottom>
              Recorded users using the website over the week
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={userActivityData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activeUsers" stroke="#ff7300" yAxisId={0} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Bar Chart: Monthly Sign-ups */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', backgroundColor: 'lightgray' }}>
            <Typography variant="h6" gutterBottom>
              Monthly Sign-ups
            </Typography>
            <Typography variant="body2" gutterBottom>
              Amount of users who have signed up.
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={userSignUpData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="signUps" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', backgroundColor: 'lightgray' }}>
            <Typography variant="h6" gutterBottom>
              User Demographics
            </Typography>
            <Typography variant="body2" gutterBottom>
              Age groups of users using the site.
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userDemographicsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                >
                  {userDemographicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Additional Chart: User Engagement (Optional) */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', backgroundColor: 'lightgray' }}>
            <Typography variant="h6" gutterBottom>
              User Engagement
            </Typography>
            <Typography variant="body2" gutterBottom>
              How much users interact with the website
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={userEngagementData}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="engagement" stroke="#387908" yAxisId={0} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
