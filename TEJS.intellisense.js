function SGWorld(version){
    /// <signature>
    /// <summary>ISGWorld66 is the main entry point to most TerraExplorer interfaces. Through this interface you can manage your application and 3D content and handle events.</summary>
    /// <returns type="ISGWorld" />
    /// </signature>
    /// <signature>
    /// <summary>ISGWorld in the main entry point to most TerraExplorer interfaces. Through this interface you can manage your application and 3D content and handle events.</summary>
    /// <param name="version" type="String">"6.5" or "6.6"</param>
    /// <returns type="ISGWorld" />
    /// </signature>

    return {

        /// <field type="IAnalysis">Methods for analyzing the terrain</field>
        Analysis: {}

        /// <field type="">Controls various application level settings</field>
        ,Application:{}

        /// <field type="ICommand">Gives access to standard TerraExplorer menu commands</field>
        , Command: {}

        /// <field type="ICoordServices">Provides a set of methods for reprojecting given coordinates between different coordinate systems</field>
        , CoordServices: {}

        /// <field type="ICreator">Composed of many methods that create different objects</field>
        , Creator: {}

        /// <field type="IDateTime">Provides you with date and time related features</field>
        , DateTime: {}

        /// <field type="Boolean">Gets and sets a Boolean that determines whether the containing application executes all keyboard acceleration commands or TerraExplorer executes them</field>
        , IgnoreAccelerators: false

        /// <field type="INavigate">Gives you control of the camera in terms of positioning, orientation, and speed</field>
        , Navigate: {}

        /// <field type="IProject">Gives access to project settings and to basic methods for opening and saving the project</field>
        , Project: {}

        /// <field type="IProjectTree">Allows you to manipulate the Project Tree items, including management of groups, items and layers</field>
        , ProjectTree: new IProjectTree()

        /// <field type="ITerrain">An ITerrain object representing information about the terrain, such as the MPT file name that is being used, and information about the MPT coordinate system</field>
        , Terrain: {}

        /// <field type="IVersionInfo">Gets information about the version of TerraExplorer that is running</field>
        , Version: {}

        /// <field type="IWindow">A wrapper for all the functionality that represents interaction with the 3D Window, such as snapshots, dimensions and query pixel information.</field>
        ,Window:{}
 

        ,AttachEvent: function(){
            /// <summary>Binds the specified function to an event, so that the function gets called whenever the event occurs</summary>
            
        }
/*
        Methods
 


        DetachEvent
        Unbinds a function that was bound to an event using the AttachEvent method.

        GetOptionParam
        Returns the value of a specified parameter in the TerraExplorer options.

        GetParam
        Reserved. Currently not used.

        Open
        Opens a specified project.

        SetOptionParam
        Sets the value of a specified parameter in the TerraExplorer options.

        SetParam
        Reserved. Currently not used.

        SetParamEx
        Reserved. Currently not used.
 
        Events
 

        OnAnalysisDistancePointAdded
        This event occurs when a distance analysis point is added.

        OnAnalysisProgress
        Notifies the client of the analysis progress.

        OnBeforePresentationItemActivation
        Notifies the client that a step is being activated.

        OnCommandValueChanged
        This event occurs when a standard TerraExplorer menu command’s value is changed.

        OnContainerChanged
        This event occurs when an operation is performed on a project’s custom containers.

        OnCreateBasicKit
        This event occurs when a Publish Project as Local Kit, Publish Project as Internet Kit, or Extract and Publish area as Offline Kit command is given.

        OnDataSourceFeatureIdChanged
        This event is triggered when the ID of the feature that was assigned by the data source is changed.

        OnDateTimeChanged
        This event occurs when the date and time settings are changed to a specific date and time.

        OnDrawHUD
        This event is sent in each frame, after the frame is rendered, but before the HUD layer is drawn.

        OnFileClosed
        This event occurs after a Fly file is closed.

        OnFileClosing
        This event occurs when a file is being closed.

        OnFileSave
        This event occurs when a Fly file is being saved.

        OnFrame
        This event occurs, before the frame is rendered, to allow the client to perform any per frame activities (i.e. moving objects on the terrain).

            OnInputModeChanged
            This event occurs when the TerraExplorer Input mode is changed (e.g., switching from free flight mode to measurements mode).

            OnLayerStreaming
            This event occurs when a layer is streamed from the server without first storing it in a client local file.

            OnLButtonClicked
            This event occurs when the user clicks the left mouse button.

            OnLButtonDblClk
            This event occurs when the user double-clicks the left mouse button.

            OnLButtonDown
            This event occurs when the user presses the left mouse button.

            OnLButtonUp
            This event occurs when the user releases the left mouse button.

            OnLoadFinished
            This event occurs after TerraExplorer finishes loading a Fly file.

            OnMButtonDblClk
            This event occurs when the user presses the middle mouse button.

            OnMButtonDown
            This event occurs when the user presses the middle mouse button.

            OnMButtonUp
            This event occurs when the user releases the middle mouse button.

            OnMouseWheel
            This event occurs as a user rotates the mouse wheel and encounters the wheel’s next notch.

            OnObjectAction
            This event occurs when certain actions (e.g., fly to an object) are performed on the object.

            OnPresentationFlyToReachedDestination
            If a step includes a FlyTo operation, this event is triggered when the FlyTo is finished and the camera reached the location.

            OnPresentationPlayTimeAnimationEnded
            This event occurs when a play time animations ends.

            OnPresentationStatusChanged
            This event occurs when a presentation’s play status changes status.

            OnProjectTreeAction
            This event occurs when certain actions (e.g., showing and hiding items) are performed on Project Tree items.

            OnRButtonDblClk
            This event occurs when the user double-clicks the right mouse button.

            OnRButtonDown
            This event occurs when the user presses the right mouse button.

            OnRButtonUp
            This event occurs when the user releases the right mouse button.

            OnRenderQualityChanged
            This event occurs whenever the terrain quality that the user is currently viewing is updated.

            OnSGWorld
            This event occurs when a specifiedTerraExplorer event takes place.

            OnSGWorldMessage
            This event occurs when a message object is about to be triggered.


*/
    }; // End Return


    function IProjectTree() {
        return {
            GetObject: function (ID) {
                /// <summary>Returns an interface to an object based on its ID. If IProjectTree.GetObject fails, it might be that the item that you are trying to access is actually a group (which has no interface).
                /// <para>To determine whether a Project Tree element is a group, use IProjectTree.IsGroup. </para>
                /// </summary>
                /// <param name="ID" type="String">The requested item ID.</param>
                /// <returns type="ITerraExplorerObject" />
            }
        }
    }

    function ITerraExplorerObject() {
        return {
            /// <field type="String">Gets the ID of the object</field>
            ID: '',
            /// <field type="Number">Gets an enum that identifies the type of the object</field>
            ObjectType: 0
        }
    }


}

