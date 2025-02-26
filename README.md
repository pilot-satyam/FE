# Namaste React 🚀

there are 2 types of dependencies that we can install 
1) Dev dependencies 
2) Normal Dependencies(used in prod too)

React.createElement ==> it is basically a react object ==> when we render it on DOM ==> then becomes HTML element

parcel --> bundler

npm install -D parcel --> -D for dev dependency

^ --> caret (if any minor version comes then it will update automatically)
~ --> tilde (if any major version comes then it will update automatically)
It is safe to use caret and not tilde.

package.json --> contains caret and tilde and is approximate version and is configuration for app
package-lock.json --> contains exact version that is being installed in the app

node modules --> contains all the src code for the packages that we install

it's not required to push node_modules to production as they can be re installed from the package.json and package-lock.json file hence we add it to .gitignore

--> but it is required to push package.json and pacakge-lock.json to push it to prod.

==> npx parcel index.html, it hosts our code on server eg localhost:1234
npx is used for executing that package

==> import React from "react"; it will install from node_modules.

Browser scripts cannot have imports or exports --> means in index.html we have defined    
 <script src="./App.js"></script> so it treats as normal javscript which cannot have imports but since our code is using react we need to add import so we just need to specify type = "module"    
  <script type="module" src="./App.js"></script>

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds (it caches things for you and then reduces building time)
- Image Optimization
- Minification
- Compress your files
- Consisting Hasing
- Code Splitting
- Differential Bundling - supports older browsers
- Diagnostic
- Error Handling
- Tree Shaking- remove unused code

all the builds of parcel are generated in "dist" folder, which is put in .gitignore as it can be generated again.

npx parcel index.html ==> this is dev build

npx parcel build index.html ==> this is a production build(optimized) ==> Target "main" declares an output file path of "App.js" which does not match the compiled bundle type 
"html". so we need to remove default name from package.json as we are explicitly specifying the index.html file so it creates a conflict, so removing it will create a build using parcel

** browsers list which is configured in package.json file will help us help make the app compatible for earlier versions.

==> JSX is not proper javascript and is developed to help react developers, react can run without writing in JSX. Browsers don't understand JSX by default they understand echmaScript(ES6) but inorder to run JSX code and make javascript engine understand the code "PARCEL" come into the picture and do the job for us.

==> Parcel does not convert it on its own it uses 'BABEL' which is JS compiler which help compiles JSX to React code.

=> JSX => (babel converts it into React element) ==>React.createElement => ReactElement(object) => HTMLElement(render)

const jsxHeading = <h1 className="head"> Hello JSX </h1> --> this is single line valid JSX
but if you have to write in multiline then you need to wrap it in brackets so BaBel knows where to start and end the JSX. eg (<h1 className="head"> 
                          Hello JSX </h1>)

//Compoenet are nothing but javscript function
you can use normal java script code in JSX by using {} (curly paranthesis):
const HeadingComponent =()=>(
  <div id="container">
    <Title />
    {title}
    <h1 className="heading">React Functional Component</h1>
  </div>
);

==> all these 3 things are same and do same functionality: 
1) <Title />
2) <Title> </Title>
3) Or can be call in JS function like {Title()}


==> In map when we are passing the key it should be unique id, and it should not be natural index
eg it should not be natural ordering like 1,2 in their order it should take the id coming in from the 
backend and this is written in React documentation. 
eg. {
        resList.map((restaurant,index)=>(
          <RestaurantCard key={index} resData={restaurant}/>//this should not be practiced
        ))
      }
===> In components folder we can either consider the file type to be js or jsx, it hardly matters.

==> there are two types of exports:
By default in a single file we can export only single file/component/util, and we cannot export more than 1 thing.
  1) default export : export default Header;
  2) named export : if many things are needed to be exported from same file then we need to insert 'export' before the component/utils.

  it should be imported like this import {CDN_URL} from .... ==> {} (should be in curly braces)

  if it is default export then we simply import like import CDN from path but when it is name export then you should cover in curly braces like above import {CDN} from path

** onClick is javascript code hence starts with {} and it is always a callback function eg:
<button onClick={()=>{console.log("abcs")}}>

==> difference between const and let is that let allow us in  modifying values eg. filter while const doesn't.

==> hooks are normal js functions, (useState,useEffect)

==> to recieve useState we take a type of array ==> const [] = useState(); and to import it we should name import (with curly braces) ==> import {useState} from React

==> normal js ==> let listOfRestaurants; is equivalent to const [listOfRestaurants] = useState();

==> let listOfRestaurants = [] in hook it will be const [listOfRestaurants] = useState([]) //we pass default value inside here.

*** whenever a state variable changes, React re-renders its component. Eg. writing to filter the rating above 4 stars using "let" will not render/change UI but using state does.

==> here in useState in order to make any change or modify it a second parameter as we cannot directly modify it, eg : const[listOfRestaurants, setListOfRestaurants] = useState(); here we use setListOfRestaurants to make chages. It (setListOfRestaurants) is required to start the trigger to run the 'DIFF' algorithm so that it calculates the changes and then re render the UI.

==> we can write useState in two forms, since it accepts array 
eg: 1) const arr = useState(resList); and then const[abc,setAbc] = arr;
    2) const arr = useState(resList); and const abc = arr[0]; const setAbc = arr[1]; because at the end of the it is array

==> React is very fast because it does DOM manipulations super fast and hence re-renders component as it has virtual DOM.

==> Actual DOM is some thing like this ==> <div> <div> </div></div> like nested Div but virtual DOM is "representation" of Actual DOM i.e it is nothing but a javascript object, and that object will contain all the JS related code like the above nested divs.

==> Diff Algorithm : This algorithm compares the difference between current DOM object and previous DOM object and calculates the changes and then updates the actual DOM and then renders on UI.

==>  When you create elements in React, you're actually creating
virtual DOM objects. These virtual replicas are synced with the
real DOM, a process known as "Reconciliation" or the React
"diffing" algorithm.

===> useEffect is called after the component renders, meaning first the structure is rendered
and then useEffect is called, eg : firstDummydata is called and then use effect is called.

==> eg. useEffect(()=>{
    console.log("useEffect Render"); //it will be rendered second
},[]);

console.log("Body render"); // it will be rendered first since the body will load first

==> during making  a fetch call to get the data from api we use 'fetch' keyword it is provided by 
browser and not javascript.

==> fetch returns a promise and then we have to resolve it, new approach of resolving the conflict is 
to use async await.  

==> whenever any change is made eg. a change in button(Header component) is made then the whole
component is refreshed and not the button alone.

==> when you want to make dyanmic change to UI we use state variables, eg: to change it to logout
from login upon clicking the button then we need to change the state variable to false, and as we 
saw earlier normal javascript variable will not work.

==> Shimmer UI is used to render the default skeleton of the website until the real data loads.

==> if no dependency array in useEffect then it is called on every render
==> if dependency array is empty([]) then useEffect is called only once.
==> if we pass some dependency then it will be called only when the dependency is updated. eg: [btnNameReact] when we click on the button(login) then each time when the value is changed it is rendered.

==> import { useRouteError } from "react-router-dom" this is hook provided to us by react to handle error more gracefully. We can use it like this :  
    const err = useRouteError();
    console.log(err); and then we can use to display more accurate error

==> suppose you are on a page eg. AboutUs page then in this header is not loaded and simple message is displayed but we want to display the header too without writing it again so will use child routes.
In child routes we will move the other routes defined in App.js to children section of parent route like this : 

 {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },]}

 and in above main part we can use Outlet present in react router dom, so everytime a child component is called it takes that particular Outlet position and render itself after the <Header> component.

 ==> we should never use a href in react because it will refresh the whole page and renders the component again and makes UI slow. Instead we should use  {Link} from react-router-dom.

 ==> React is a single page application(SPA) as componenets are only replaced and there are no multiple pages. It is happening with help of client side routing.

==> it uses "client side routing" and not "server side routing". Earlier during html calls it was suppose to be server side routing eg. clicking on about us will give a network call to server fetches data and then renders in UI hence there was delay in UI.

==> for creating a class based component we use keyword 'class' and then extend it with React. Component and it then uses 'render' to return the jsx. 

==> Like in function based component we pass props like this : const User = (props) => {<h2>Name : {props.name} </h2>} similarly in order to pass props in class based function we create constructor for it and then use super keyword.

==> in functional based component for creating 2 states we use useState two times but here in class based component we write in same object.

==> In class based component first the parent constructor will be called then parent render will be called after that child constructor and then child render will be called.

==> componentDidMount() it used to make api calls like how we do in useEffect.

*** suppose you have componentDidMount() method both in child and parent component then fir child componentDidMount will be called first as the parent component is not fully rendered becuase child component is not mounted completely. then the order will be parent constructor, parent render, child constructor, child render, child componentDidMOunt and parentComponentDidMount.

==> componentDidMount() we use it because in React first we render the component(like load the basic details) and then fetch the data, as in above we can see first Render() is called and thenn componentDidMount() is called, we don't want to wait until it fetches the data. 

==> Suppose there are multiple children in a class component like 
<UserClass name={"First"} />
<UserClass name={"Secind"}/> then here the order will be like this

-Parent Constructor
-Parent Render
  First child Constructor
  First child Render

  Second child Constructor
  Second child Render

  <DOM UPDATED - IN SINGLE BATCH>

  -First child componentDidMount()
  -Second child componentDidMount()
-Parent componentDidMount()

It is called in this order because when 2 or more children components are there then in order to make DOM manipulations less expensive React makes 'batches' of render and componentDidMount and hence diff between two is calculated superfast and hence this is the flow.

*** Why do we require componentWillUnmount()?

suppose if keep set interval to print certain number after let's say 1 sec then it will continue
to increase the upgrade that counter even when the component is changed meaning if you move from 
About to Home page then in home page it will start new timer again, this happens since React is
a SPA(single page application) and this is a problem as our performance goes down significantly.
Hence in order to stop that set interval when we change the component we will require componentWillUnmount() and to access that counter in componentWillUnmount  we will use 'this' keyword
as it can be accessed by any method.

componentDidMount(){
  this.timer = setInterval(()=>{
    console.log('react op')
  },1000) // repeating after every sec
}

componentWillUnmount(){
  clearInterval(this.timer) //accessing with this.timer
  console.log('Component will unmount');
}

Similary if we try to do this in useEffect then we can use "return" in useEffect itself.

useEffect(()=>{
  const timer = setInterval(()=>{
    console.log('react op')
  },1000);
  console.log('useEffect called');

  return()=>{
    clearInterval(timer);
    console.log("useEffect Return");
  };
},[]);

*** for custom hook always name it in small case and starting with 'use' eg. useOnline(), inorder to write custom hook first think of what will be the input and what will be the output, then write the logic.

*** In applications, we have so many components and eventually it will slow down the app, so in order to make it fast we can use the concept of lazy loading, where we render the component only when clicked or required, so this eventaally seperates the bundle intially.

Eg. if we make Grocery as lazy loaded then when our app loads then it only loads index.html but it does not loads the code for grocery, it will get loaded when clicked on it. So a new Grocery file can be seen in n/w tab along with index file.

*** if you don't use 'Suspense' keyword in routing the lazy component then it will throw an error saying React is not able to load suspense something.... what it means is that it cannnot find code for that component, and hence in order to load it we use Suspense keyword.

*** this is the syntax for lazy loading : const Grocery = lazy(()=>import("./components/Grocery"));

*** higher order component: it is a function that takes a component enhances it and then return back a new component.

==> to create a higher order component, remember we are just returning a simple component so we will take a component and then wrap it in current component and then return the function.

//here we are wrapping the RestaurantCard component.

==> eg. export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{  ==>it is returning component
    return(  ==> this is jsx how we return usually
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

