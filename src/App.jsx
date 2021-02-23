import React from 'react';
import RegisterForm from "./components/Forms/registerForm";
import LoginForm from './components/Forms/loginForm';
import ForgotPassword from './components/Forms/forgotPasswordForm';
import ConfirmForgetPassword from './components/Forms/confirmForgotPassword';
import AddDailyMessage from './components/addDailyMessage';
import HeaderPage from './components/Header/headerPage';
import MessageView from './components/messageView';
import AddCompaign from './components/addCompaign';
import UpdateCompaign from './components/updateCompaign';
import ListCompaign from './components/Header/listCompaign';
import ListRangeCompaign from './components/listRangeCompaigns';
import ViewRangeCompaign from './components/viewRangeCompaigns';
import AddEvent from './components/addEvent';
import AddDigitalAdd from './components/addDigitalAdd';
import AddFieldOperation from './components/addFieldOperation';
import AddPaidAdvertisement from './components/addPaidAdvertisement';
import AddOOHAdvertisement from './components/addOOHAdvertisement';
import AddMailbox from './components/addMailbox';
import AddResearchPlanning from './components/addResearchPlanning';
import AddMessage from './components/addMessage';
import UpdateMessage from './components/updateMessage';
import CampaignOption from './components/campaignOptions';
import CampaignOverview from './components/Overview';
import Contact from './components/Contact';
import Practice from './components/jquerycheck';
import "bootstrap/dist/css/bootstrap.min.css"


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
    
      <Switch>
        <Route exact path="/">
          <RegisterForm />
        </Route>
        <Route exact path="/loginForm">
          <LoginForm />
        </Route>
        <Route exact path="/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route exact path="/confirmPassword">
          <ConfirmForgetPassword />
        </Route>
        <Route exact path="/dashboard">
          <HeaderPage />
        </Route>
        <Route path="/addDailyMessage">
          <AddDailyMessage />
        </Route>
        <Route path='/messageView/:id' render={(matchProps) =>
          <MessageView
            {...matchProps}
          />
        }/>
        <Route path="/addCampaign">
          <AddCompaign />
        </Route>
        <Route path='/updateCompaign/:id' render={(matchProps) =>
          <UpdateCompaign
            {...matchProps}
          />
        }/>
        <Route path="/listCompaign/:username">
          <ListCompaign />
        </Route>
        <Route path="/listRangeCompaign">
          <ListRangeCompaign />
        </Route>
        <Route path="/viewRangeCompaign">
          <ViewRangeCompaign />
        </Route>
        <Route path='/addEvent/:id' render={(matchProps) =>
          <AddEvent
            {...matchProps}
          />
        }/>
        <Route path='/addDigitalAdd/:id' render={(matchProps) =>
          <AddDigitalAdd
            {...matchProps}
          />
        }/>
        <Route path='/addFieldOperation/:id' render={(matchProps) =>
          <AddFieldOperation
            {...matchProps}
          />
        }/>
        <Route path='/addPaidAdvertisement/:id' render={(matchProps) =>
          <AddPaidAdvertisement
            {...matchProps}
          />
        }/>
        <Route path='/addOOHAdvertisement/:id' render={(matchProps) =>
          <AddOOHAdvertisement
            {...matchProps}
          />
        }/>
        <Route path='/addMailbox/:id' render={(matchProps) =>
          <AddMailbox
            {...matchProps}
          />
        }/>
        <Route path='/addResearchPlanning/:id' render={(matchProps) =>
          <AddResearchPlanning
            {...matchProps}
          />
        }/>
        <Route path='/addMessage/:id' render={(matchProps) =>
          <AddMessage
            {...matchProps}
          />
        }/>
        <Route path='/updateMessage/:id_1/:id_2' render={(matchProps) =>
          <UpdateMessage
            {...matchProps}
          />
        }/>
        <Route path='/campaignOption/:id' render={(matchProps) =>
          <CampaignOption
            {...matchProps}
          />
        }/>
        <Route path='/campaignOverview/:id' render={(matchProps) =>
          <CampaignOverview
            {...matchProps}
          />
        }/>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/practice">
          <Practice />
        </Route>
      </Switch>
      
    </Router>
  )
}

export default App
