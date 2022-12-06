import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

// Components Imported
import FunctionComponent, { ClassComponent } from './components/Components';
import FunctionalProps, { FunctionChildProps, FunctionDetailedProps, ClassProps } from './components/Props'
import AnonymousFunction from './components/AnonymousFunction';
import FunctionalState, { ClassState } from './components/States';
import ChangeFunctionalStateData, { ChangeClassStateData } from './components/ChangeStateData';
import CompleteLifeCycleClass, {
  NestedLifeCycleClassParentClass, 
  ClassComponentWillUnmount,
  ClassTimerLifecycle, FunctionalLifeCycle
} from './components/Lifecycle';
import Event from './components/EventHandling';
import FunctionalFragment1, { FunctionalFragment2, FunctionalFragment3, ClassFragment } from './components/Fragment';
import SimpleMapFunction, { MapFunctionWithJSX } from './components/MapFunction';
import Stylesheet from './components/Stylesheet';
import FunctionalForm, { ClassForm, CommonInputHandleForm, FunctionalFormValidation } from './components/Forms';
import FunctionalGetAPI, { FunctionalGetAPIByFetch, ClassGetAPI, FunctionalPostAPI } from './components/Api';
import ErrorBoundry, { ErrorFunction } from './components/ErrorBoundry';
import ClassPureComponent from './components/PureComponent';
import FunctionalMemo from './components/Memo';
import LazyLoading from './components/LazyLoading';
import PropsTypeCheking from './components/PropsTypeCheking';
import CustomHook from './components/CustomHook';
import SimpleContext from './components/Context1';
import NestedContext from './components/Context2';
import ParentContext from './components/Context3';
import FontAwesome from './components/FontAwesome';
import FunctionAsProps from './components/FunctionAsProps';
import Portal from './components/Portal';
import CRUD from './components/CRUD';
import Hooks from './components/hooks';
import PageNotFound from './components/PageNotFound';

function App() {

  const name = "Sagar"
  const dynamicContent = <div>
    <strong className="heading"> Dynamic Text Binding </strong> <br />
    <h1 style={{ display: "inline" }}> Hello! {name} </h1>
  </div>

  return (
    <div className="App container-fluid" style={{ margin: 0, padding: 0 }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">React Practice</Navbar.Brand>
      </Navbar>

      <div className="row" style={{ margin: 0, padding: 0 }}>
        <Router>
          <div className="col-md-3" style={{ height: "90vh", overflowY: "scroll", paddingBottom: "10px" }}>
            <nav>
              <ul style={{ listStyleType: "none", textAlign: "left", marginTop: "20px" }}>
                <li> <Link to="/"> Dynamic Text Binding </Link> </li>
                <li> <Link to="/functional_component"> Functional Component </Link> </li>
                <li> <Link to="/class_component"> Class Component </Link> </li>
                <li> <Link to="/anonymous_function"> Anonymous Function </Link> </li>
                <li> <Link to="/functional_props"> Functional Props </Link> </li>
                <li> <Link to="/functional_child_props"> Functional Child Props </Link> </li>
                <li> <Link to="/functional_detailed_props"> Functional Detailed Props </Link> </li>
                <li> <Link to="/class_props"> Class Props </Link> </li>
                <li> <Link to="/event_handling"> Event Handling </Link> </li>
                <li> <Link to="/functional_state"> Functional State </Link> </li>
                <li> <Link to="/class_state"> Class State </Link> </li>
                <li> <Link to="/change_functional_state_data"> Change Functional State Data </Link> </li>
                <li> <Link to="/change_class_state_data"> Change Class State Data </Link> </li>
                <li> <Link to="/class_complete_lifecycle"> Complete Lifecycle (Class) </Link> </li>
                <li> <Link to="/class_nested_lifecycle"> Nested LifeCycle (Class) </Link> </li>
                <li> <Link to="/class_component_will_unmount"> Class Component Will Unmount </Link> </li>
                <li> <Link to="/class_timer_lifecycle"> Timer Lifecycle (Class) </Link> </li>
                <li> <Link to="/functional_lifecycle"> Functional Lifecycle </Link> </li>
                <li> <Link to="functional_fragment1"> Functional Fragment1 </Link> </li>
                <li> <Link to="functional_fragment2"> Functional Fragment2 </Link> </li>
                <li> <Link to="functional_fragment3"> Functional Fragment3 </Link> </li>
                <li> <Link to="/class_fragment"> Class Fragment </Link> </li>
                <li> <Link to="/simple_map_function"> Simple Map Function </Link> </li>
                <li> <Link to="/map_function_with_JSX"> Map Function With JSX </Link> </li>
                <li> <Link to="/stylesheet"> Stylesheet </Link> </li>
                <li> <Link to="/functional_form"> Functional Form </Link> </li>
                <li> <Link to="/functional_form_validation"> Functional Form Validation </Link> </li>
                <li> <Link to="/class_form"> Class Form </Link> </li>
                <li> <Link to="/common_input_handle_form"> Common Input Field Handle Form </Link> </li>
                <li> <Link to="/CRUD"> CRUD </Link> </li>
                <li> <Link to="/functional_get_api_by_fetch"> Functional GET API By Fetch() </Link> </li>
                <li> <Link to="/functional_get_api"> Functional GET API </Link> </li>
                <li> <Link to="/functional_post_api"> Functional POST API  </Link> </li>
                <li> <Link to="/class_get_api"> Class GET API </Link> </li>
                <li> <Link to="/class_pure_component"> Class Pure Component </Link> </li>
                <li> <Link to="/functional_memo"> Functional Memo </Link> </li>
                <li> <Link to="/lazy_loading"> Lazy Loading </Link> </li>
                <li> <Link to="/props_type_cheking"> Props Type Cheking </Link> </li>
                <li> <Link to="/custom_hook"> Custom Hook </Link> </li>
                <li> <Link to="/simple_context"> Simple Context </Link> </li>
                <li> <Link to="/nested_context"> Nested Context </Link> </li>
                <li> <Link to="/use_context_method"> UseContext Method </Link> </li>
                <li> <Link to="/function_as_props"> Function As Props </Link> </li>
                <li> <Link to="/portal"> Portal </Link> </li>
                <li> <Link to="/error_boundry"> Error Boundry </Link> </li>
                <li> <Link to="/font_awesome"> Font Awesome </Link> </li>
                <li> <Link to="/hooks"> Hooks </Link> </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-9" style={{ marginTop: "20px" }}>
            <ErrorBoundry>
              <Switch>
                <Route exact path="/"> {dynamicContent} </Route>
                <Route path="/functional_component"> <FunctionComponent /> </Route>
                <Route path="/class_component"> <ClassComponent /> </Route>
                <Route path="/anonymous_function">  {AnonymousFunction("data title", "data description")} </Route>
                <Route path="/functional_props"> <FunctionalProps name="sagar" last="ninave" /> </Route>
                <Route path="/functional_child_props">
                  <FunctionChildProps name="vishal" last="">
                    <span> user does not have last name </span> <br />
                    <span> user is VVIP </span> <br />
                  </FunctionChildProps>
                </Route>
                <Route path="/functional_detailed_props"> <FunctionDetailedProps /> </Route>
                <Route path="/class_props"> <ClassProps first_name="Sagar" last_name="Ninave" /> </Route>
                <Route path="/event_handling"> <Event /> </Route>
                <Route path="/functional_state"> <FunctionalState /> </Route>
                <Route path="/class_state"> <ClassState /> </Route>
                <Route path="/change_functional_state_data"> <ChangeFunctionalStateData /> </Route>
                <Route path="/change_class_state_data"> <ChangeClassStateData /> </Route>
                <Route path="/class_complete_lifecycle"> <CompleteLifeCycleClass /> </Route>
                <Route path="/class_nested_lifecycle"> <NestedLifeCycleClassParentClass /> </Route>
                <Route path="/class_component_will_unmount"> <ClassComponentWillUnmount /> </Route>
                <Route path="/class_timer_lifecycle"> <ClassTimerLifecycle /> </Route>
                <Route path="/functional_lifecycle"> <FunctionalLifeCycle /> </Route>
                <Route path="/functional_fragment1"> <FunctionalFragment1 /> </Route>
                <Route path="/functional_fragment2"> <FunctionalFragment2 /> </Route>
                <Route path="/functional_fragment3"> <FunctionalFragment3 /> </Route>
                <Route path="/class_fragment"> <ClassFragment /> </Route>
                <Route path="/simple_map_function"> <SimpleMapFunction /> </Route>
                <Route path="/map_function_with_JSX"> <MapFunctionWithJSX /> </Route>
                <Route path="/stylesheet"> <Stylesheet value={true} name={"sagar"} /> </Route>
                <Route path="/functional_form"> <FunctionalForm /> </Route>
                <Route path="/functional_form_validation"> <FunctionalFormValidation /> </Route>
                <Route path="/class_form"> <ClassForm /> </Route>
                <Route path="/common_input_handle_form"> <CommonInputHandleForm /> </Route>
                <Route path="/CRUD"> <CRUD /> </Route>
                <Route path="/functional_get_api_by_fetch"> <FunctionalGetAPIByFetch /> </Route>
                <Route path="/functional_get_api"> <FunctionalGetAPI /> </Route>
                <Route path="/class_get_api"> <ClassGetAPI /> </Route>
                <Route path="/functional_post_api"> <FunctionalPostAPI /> </Route>
                <Route path="/class_pure_component"> <ClassPureComponent /> </Route>
                <Route path="/functional_memo"> <FunctionalMemo /> </Route>
                <Route path="/lazy_loading"> <LazyLoading /> </Route>
                <Route path="/props_type_cheking"> <PropsTypeCheking /> </Route>
                <Route path="/custom_hook"> <CustomHook /> </Route>
                <Route path="/simple_context"> <SimpleContext /> </Route>
                <Route path="/nested_context"> <NestedContext /> </Route>
                <Route path="/use_context_method"> <ParentContext /> </Route>
                <Route path="/function_as_props"> <FunctionAsProps /> </Route>
                <Route path="/portal"> <Portal /> </Route>
                <Route path="/error_boundry"> <ErrorFunction /> </Route>
                <Route path="/font_awesome"> <FontAwesome /> </Route>
                <Route path="/hooks"> <Hooks /> </Route>

                <Route path="/404"> <PageNotFound /> </Route>
                <Redirect to="/404" />

              </Switch>
            </ErrorBoundry>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
