import logo from './logo.svg';
import './App.css';
// import OneSignal from 'react-onesignal';
import { useEffect } from 'react';
function App() {
  
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;
    OneSignal.push(()=> {
      OneSignal.setExternalUserId("89898")
      OneSignal.init(
        {
          appId: "be18a344-2f26-4152-a30c-dcb813f8905d", //STEP 9
          promptOptions: {
            slidedown: {
              enabled: true,
              actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
              acceptButtonText: "OMG YEEEEESS!",
              cancelButtonText: "NAHHH",
              categories: {
                  tags: [
                      {
                          tag: "react",
                          label: "ReactJS",
                      },
                      {
                        tag: "angular",
                        label: "Angular",
                      },
                      {
                        tag: "vue",
                        label: "VueJS",
                      },
                      {
                        tag: "js",
                        label: "JavaScript",
                      }
                  ]
              }     
          } 
        },
        welcomeNotification: {
          "title": "One Signal",
          "message": "Thanks for subscribing!",
        } 
      },
        //Automatically subscribe to the new_app_version tag
        OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
          // Callback called when tag has finished sending
          console.log('new_app_version TAG SENT', tagsSent);
        })
      );
    });
  }, []);
  return (
    // <div className="App">
    //   <header className="App-header">
        
    //   </header>
    // </div>
    <h1>One Signal - React DEMO</h1>
  );
}

export default App;
