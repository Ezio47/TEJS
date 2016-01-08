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
        Analysis: new IAnalysis()

        /// <field type="">Controls various application level settings</field>
        ,Application: new IApplication()

        /// <field type="ICommand">Gives access to standard TerraExplorer menu commands</field>
        , Command: new ICommand()

        /// <field type="ICoordServices">Provides a set of methods for reprojecting given coordinates between different coordinate systems</field>
        , CoordServices: new ICoordServices()

        /// <field type="ICreator">Composed of many methods that create different objects</field>
        , Creator: new ICreator()

        /// <field type="IDateTime">Provides you with date and time related features</field>
        , DateTime: new IDateTime()

        /// <field type="Boolean">Gets and sets a Boolean that determines whether the containing application executes all keyboard acceleration commands or TerraExplorer executes them</field>
        , IgnoreAccelerators: false

        /// <field type="INavigate">Gives you control of the camera in terms of positioning, orientation, and speed</field>
        , Navigate: new INavigate()

        /// <field type="IProject">Gives access to project settings and to basic methods for opening and saving the project</field>
        , Project: new IProject()

        /// <field type="IProjectTree">Allows you to manipulate the Project Tree items, including management of groups, items and layers</field>
        , ProjectTree: new IProjectTree()

        /// <field type="ITerrain">An ITerrain object representing information about the terrain, such as the MPT file name that is being used, and information about the MPT coordinate system</field>
        , Terrain: new ITerrain()

        /// <field type="IVersionInfo">Gets information about the version of TerraExplorer that is running</field>
        , Version: new IVersionInfo()

        /// <field type="IWindow">A wrapper for all the functionality that represents interaction with the 3D Window, such as snapshots, dimensions and query pixel information.</field>
        ,Window: new IWindow()
 

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

    function IAnalysis()
    {
        return {};
    }
    function IApplication()
    {
        return {};
    }
    function ICommand() {
        return {};
    }
    function ICoordServices() {
        return {};
    }
    function ICreator() {
        return {};
    }
    function IDateTime() {
        return {};
    }
    function INavigate() {
        return {};
    }
    function IProject() {
        return {};
    }
    function IProjectTree() {
        return {
            //Members

            /// <field type="String">Gets the ID of the hidden group tree element. When this ID is passed as an element’s ParentGroupID, the element will be added under a hidden group</field>
            HiddenGroupID:'',
            /// <field type="String">Gets the name of the hidden group tree element. When this name is passed as an element’s ParentGroupName, the element will be added under a hidden group</field>
 	        HiddenGroupName:'',
            /// <field type="String">Gets the ID that should be passed as an element’s ParentGroupID, if you do not want the element added to the Project Tree</field>
 	        NotInTreeID:'',
            /// <field type="String">Gets the ID of the Tree root element. When this ID is passed as an element’s ParentGroupID, the element will be added under the Tree root
            /// <para>Note:	In some methods (e.g. all CreateXXX methods such as Create3DArrow), an element can also be created under the Tree root by passing an empty string for the ParentGroupID</para>
            /// </field>
 	        RootID:'',
            
            // Methods

 	        CreateGroup: function (GroupName, ParentGroupID) {
 	            /// <signature>
 	            /// <summary>This method creates a group in root of the Project Tree
 	            /// <para>Returns the ID of the group being created</para></summary>
 	            /// <param name="GroupName" type="String">Name assigned to the group being created</param>
 	            /// <returns type="String" />
 	            /// </signature>
 	            /// <signature>
 	            /// <summary>This method creates a group in the Project Tree
 	            /// <para>Returns the ID of the group being created</para></summary>
 	            /// <param name="GroupName" type="String">Name assigned to the group being created</param>
 	            /// <param name="ParentGroupID" type="String">The Project Tree group in which the group is created. If it is set to an empty string, the object is created under the root</param>
 	            /// <returns type="String" />
 	            /// </signature>
 	        },
 	        CreateLockedGroup: function(GroupName, ParentGroupID) {
 	            /// <signature>
 	            /// <summary>Creates a group in a “locked” (collapsed) mode. When locked, TerraExplorer Viewer users cannot expand the group to view its contents
 	            /// <para>Returns the ID of the group being created</para></summary>
 	            /// <param name="GroupName" type="String">Name assigned to the group being created</param>
 	            /// <returns type="String" />
 	            /// </signature>
 	            /// <signature>
 	            /// <summary>Creates a group in a “locked” (collapsed) mode. When locked, TerraExplorer Viewer users cannot expand the group to view its contents
 	            /// <para>Returns the ID of the group being created</para></summary>
 	            /// <param name="GroupName" type="String">Name assigned to the group being created</param>
 	            /// <param name="ParentGroupID" type="String">The Project Tree group in which the group is created. If it is set to an empty string, the object is created under the root</param>
 	            /// <returns type="String" />
 	            /// </signature>
 	        },
 	        DeleteItem: function (ID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        EditItem: function (ID, Flags) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        EditItems: function (Items) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        EnableRedraw: function (bEnable) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        EndEdit: function() {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        ExpandGroup: function (GroupID, bExpand) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        FindItem: function (PathName) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetActivationCode: function (GroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetClientData: function (ID, Namespace) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetGroupEndTime: function (GroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetGroupLocation: function (GroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetGroupStartTime: function (GroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetItemName: function(ID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetLayer: function (GroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetNextItem: function (ID,Code) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        GetObject: function (ID) {
 	            /// <summary>Returns an interface to an object based on its ID. If IProjectTree.GetObject fails, it might be that the item that you are trying to access is actually a group (which has no interface).
 	            /// <para>To determine whether a Project Tree element is a group, use IProjectTree.IsGroup. </para>
 	            /// </summary>
 	            /// <param name="ID" type="String">The requested item ID.</param>
 	            /// <returns type="ITerraExplorerObject" />
 	        },
 	        GetVisibility: function (ID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        IsGroup           : function(ID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        IsLayer	          : function() {
 	            /// <summary>Obsolete. To determine whether a Project Tree element is a feature layer, use IProjectTree.GetObject to return an interface to the element and then ITerraExplorerObject. ObjectType to get the element type.</summary>
 	            /// <deprecated type="remove"></deprecated>
            },
 	        IsLocked          : function(ID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        LoadFlyLayer: function (FlyURL,ParentGroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        LockGroup: function (GroupID,bLock) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        RenameGroup: function (GroupID,GroupName) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SaveAsFly: function (FlyName,GroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SaveAsKml: function (KmlName,GroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SelectItem: function (ID,Flags,Reserved) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SetActivationCode: function (GroupID,ACode,ActivationParam) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SetClientData: function (ID,Namespace,ClientData) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SetGroupEndTime: function (GroupID,newVal) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SetGroupLocation: function (GroupID,newVal) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SetGroupStartTime: function (GroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SetParent: function (ID,ParentGroupID) {
 	            /// <summary></summary>
 	            /// <returns type="" />
 	        },
 	        SetVisibility: function (ID,bShow) {
 	            /// <summary>This method sets a Project Tree item’s visibility on the terrain</summary>
 	            /// <returns type="Undefined" />
 	        },
 	        SortGroup: function (GroupID,SType) {
 	            /// <summary>Sorts the items in the group according to the specified sort type</summary>
 	            /// <returns type="Undefined" />
            },

            //$$$$$$$$$$$$
            /*
 	            
            
            Creates a group in a “locked” (collapsed) mode. When locked, TerraExplorer Viewer users cannot expand the group to view its contents
            Deletes an item from the Project Tree (and from the terrain, if that item was a terrain object)
            Opens the property sheet to edit a specified item.
            Opens the Multi Edit property sheet to edit multiple specified items.
            Enables changes to be redrawn or prevents them from being redrawn in the Project Tree.
            Terminates the edit item mode.
            Expands the specified group so that it displays all of its children, or collapses it.
            Finds an item using a path to that item.
            Returns the activation code assigned for the specified group.
            Returns the text string describing the group’s attribute data. This information is available for general use in your application. 
            Returns the specified group’s end date and time.
            Returns the location of the specified group.
            Returns the specified group’s start date and time.
            Returns the name of a specific item using its ID.
            Returns an interface to the IFeatureLayer66 object based on the specified group ID.
            Retrieves the Project Tree item that has the specified relationship, indicated by the Code parameter, to another item whose ID is specified.
            Returns an ITerraExplorerObject interface to an object based on its ID. 
            Returns the visibility status of a Project Tree item on the terrain. 
            Determines whether or not a ProjectTree item is a group.
            Determines whether or not  a group is locked.
            Loads a Fly file into the current project. All the objects from the Fly file, including locations, routes and hyperlinks, are added. 
            Sets a group to a “lock” (collapsed) status mode. When a group is locked, users of TerraExplorer Viewer cannot expand the group and view its contents.
            Renames a group in the Project Tree.
            Saves the specified group to a Fly file.
            Saves the specified group to a KML file.
            Selects an item in the Project Tree.
            Determines the default activation action executed when clicking on the locked group symbol.
            Stores a text string in the group global namespace.
            Determines the date and time when the group should stop being visible
            Determines the location parameters for a specified group.
            Determines the date and time when the group should start being visible
            Moves an item to a different group.
            Sets a ProjectTree item to be visible, or not visible, on the terrain.
 	            ShowSubTree	Reserved
            Sorts the items in the group according to specified sort type.

            */

            //$$$$$$$$$$$$
        }
    }
    function ITerrain() {
        return {};
    }
    function IVersionInfo() {
        return {};
    }
    function IWindow() {
        return {};
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

