function SGWorld(version){
    /// <signature>
    /// <summary>ISGWorld66 is the main entry point to most TerraExplorer interfaces. Through this interface you can manage your application and 3D content and handle events.</summary>
    /// <returns type="ISGWorld" />
    /// </signature>
    /// <signature>
    /// <summary>ISGWorld in the main entry point to most TerraExplorer interfaces. Through this interface you can manage your application and 3D content and handle events.</summary>
    /// <param name="version" type="Decimal">6.5 or 6.6</param>
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
 	            /// <summary>Deletes an item from the Project Tree (and from the terrain, if that item was a terrain object such as a polyline)</summary>
 	            /// <param name="ID" type="String">The ID of the item to be deleted</param>
 	            /// <returns type="Undefined" />
 	        },
 	        EditItem: function (ID, Flags) {
 	            /// <summary>Opens the property sheet to edit a specified item. Advanced edit options are available through the Flags parameter</summary>
 	            /// <param name="ID" type="String">The ID of the item to edit</param>
 	            /// <param name="Flags" type="EditITemFlags">enum</param>
 	            /// <returns type="Undefined" />
 	        },
 	        EditItems: function (Items) {
 	            /// <summary>Opens the Multi Edit property sheet to edit multiple specified items</summary>
 	            /// <param name="Items" type="object">An array that contains item IDs. Each item ID in the array is selected for the multi-edit operation</param>
 	            /// <returns type="Undefined" />
 	        },
 	        EnableRedraw: function (bEnable) {
 	            /// <summary>This method is used to allow or prevent redrawing of changes in the Project Tree</summary>
 	            /// <param name="bEnable" type="Boolean">A Boolean that determines whether or not the Project Tree should be redrawn</param>
 	            /// <returns type="Undefined" />
 	        },
 	        EndEdit: function() {
 	            /// <summary>This method terminates the EditItem mode</summary>
 	            /// <returns type="Undefined" />
 	        },
 	        ExpandGroup: function (GroupID, bExpand) {
 	            /// <summary>Expands the specified group (so that it displays all of its children) or collapses it</summary>
 	            /// <param name="GroupID" type="String">The ID the group that is expanded (or collapsed). You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <param name="bExpand" type="Boolean">A Boolean that determines whether the group is expanded or collapsed</param>
 	            /// <returns type="Undefined" />
 	        },
 	        FindItem: function (PathName) {
 	            /// <summary>Finds an item using a path to that item. Supported by TerraExplorer Viewer</summary>
 	            /// <param name="PathName" type="String">The exact path to the item being searched. Child items are separated by ‘\’ (i.e. “Cities\Boston”)</param>
 	            /// <returns type="String" />
 	        },
 	        GetActivationCode: function (GroupID) {
 	            /// <summary>Returns the activation action assigned to the specified group</summary>
 	            /// <param name="GroupID" type="String">Refers to the group whose activation action is retrieved. You can obtain the GroupID by one of the following methods
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
                /// </param>
 	            /// <returns type="IAction" />
 	        },
 	        GetClientData: function (ID, Namespace) {
 	            /// <summary>The GetClientData method retrieves the text string stored in a specific namespace</summary>
 	            /// <param name="ID" type="String">The item whose client data you want to retrieve</param>
 	            /// <param name="Namespace" type="String">The identifier of the text string</param>
 	            /// <returns type="String" />
 	        },
 	        GetGroupEndTime: function (GroupID) {
 	            /// <summary>This method returns the date and time on which the specified group no longer displays on the terrain</summary>
 	            /// <param name="GroupID" type="String">The Project Tree group whose end time is being retrieved. You can obtain the GroupID by one of the following methods
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <returns type="Object" />
 	        },
 	        GetGroupLocation: function (GroupID) {
 	            /// <summary>This method returns the location parameters of the specified group</summary>
 	            /// <param name="GroupID" type="String">The ID of the group whose location you are about to get. You can obtain the GroupID by one of the following methods
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <returns type="IPosition" />
 	        },
 	        GetGroupStartTime: function (GroupID) {
 	            /// <summary>This method returns the date and time on which the specified group is first visible on the terrain</summary>
 	            /// <param name="GroupID" type="String">The Project Tree group whose start time is being returned. You can obtain the GroupID by one of the following methods
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <returns type="Object" />
 	        },
 	        GetItemName: function(ID) {
 	            /// <summary>Returns the name of a specific item in the Project Tree using its ID</summary>
 	            /// <param name="ID" type="String">The ID of the item whose name you are looking for</param>
 	            /// <returns type="String" />
 	        },
 	        GetLayer: function (GroupID) {
 	            /// <summary>The GetLayer method returns an interface to the IFeatureLayer object based on the specified ID. 
                /// <para>To determine whether GroupID is the ID of a feature layer, use IProjectTree.GetObject to return an interface to the Project Tree element and then ITerraExplorerObject. ObjectType to get the element type</para></summary>
 	            /// <param name="GroupID" type="String">The ID of the layer item requested</param>
 	            /// <returns type="IFeatureLayer" />
 	        },
 	        GetNextItem: function (ID, Code) {
 	            /// <summary>You can call this method to retrieve the Tree item that has the specified relationship, indicated by the Code parameter, to another item whose ID is specified</summary>
 	            /// <param name="ID" type="String">The reference item from which the next item is located</param>
 	            /// <param name="Code" type="ItemCode">An enum that indicates what item is being searched (In relation to the ID parameter)</param>
 	            /// <returns type="String" />
 	        },
 	        GetObject: function (ID) {
 	            /// <summary>Returns an interface to an object based on its ID. If IProjectTree.GetObject fails, it might be that the item that you are trying to access is actually a group (which has no interface).
 	            /// <para>To determine whether a Project Tree element is a group, use IProjectTree.IsGroup. </para>
 	            /// </summary>
 	            /// <param name="ID" type="String">The requested item ID.</param>
 	            /// <returns type="ITerraExplorerObject" />
 	        },
 	        GetVisibility: function (ID) {
 	            /// <summary>This method returns the visibility status of a Project Tree item on the terrain</summary>
 	            /// <param name="ID" type="String">The ID of the Project Tree item in question</param>
 	            /// <returns type="enum" />
 	        },
 	        IsGroup: function(ID) {
 	            /// <summary>This method checks whether or not a ProjectTree item is a group. IsGroup returns TRUE when the ProjectTree item is a group</summary>
 	            /// <param name="ID" type="String">The ID of the item in question</param>
 	            /// <returns type="Boolean" />
 	        },
 	        IsLayer: function() {
 	            /// <summary>Obsolete. To determine whether a Project Tree element is a feature layer, use IProjectTree.GetObject to return an interface to the element and then ITerraExplorerObject. ObjectType to get the element type.</summary>
 	            /// <deprecated type="remove"></deprecated>
            },
 	        IsLocked: function(ID) {
 	            /// <summary>This method checks whether or not a group is locked. IsLocked returns TRUE when the specified group is locked</summary>
 	            /// <param name="ID" type="String">The ID of the group in question</param>
 	            /// <returns type="Boolean" />
 	        },
 	        LoadFlyLayer: function (FlyURL, ParentGroupID) {
 	            /// <signature>
 	            /// <summary>This method loads a Fly file into the current project. All the objects from the Fly file, including locations, presentations, and hyperlinks, are added</summary>
 	            /// <param name="FlyURL" type="String">A full path name or a URL to the Fly file to load</param>
 	            /// <returns type="String" />
 	            /// </signature>
 	            /// <signature>
 	            /// <summary>This method loads a Fly file into the current project. All the objects from the Fly file, including locations, presentations, and hyperlinks, are added</summary>
 	            /// <param name="FlyURL" type="String">A full path name or a URL to the Fly file to load</param>
 	            /// <param name="ParentGroupID" type="String">The Project Tree group in which to put the objects from the imported Fly file. If set to zero, the object is created under the root. The layer objects are put in a group with the name of the Fly file (e.g., for the file “C:\MyFly.fly”, a new group named “MyFly” is created), and maintain the same internal group hierarchy as the loaded file. You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <returns type="String" />
 	            /// </signature>
 	        },
 	        LockGroup: function (GroupID, bLock) {
 	            /// <summary>The method sets a group to a “lock” (collapsed) status mode. When a group is locked, users of TerraExplorer Viewer cannot expand the group and view its contents</summary>
 	            /// <param name="GroupID" type="String">The group whose lock status is changed. You can obtain the GroupID by one of the following methods
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <param name="bLock" type="Boolean">A Boolean that determines whether the group is locked or unlocked</param>
 	            /// <returns type="Undefined" />
 	        },
 	        RenameGroup: function (GroupID, GroupName) {
 	            /// <summary>Renames a specified group in the Project Tree</summary>
 	            /// <param name="GroupID" type="String">Refers to the group that is renamed. You can obtain the GroupID by one of the following methods
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <param name="GroupName" type="String">The group’s new name</param>
 	            /// <returns type="Undefined" />
 	        },
 	        SaveAsFly: function (FlyName, GroupID) {
 	            /// <summary>This method saves the specified group to a Fly file. For security reasons the file is saved to a predefined “Skyline\TerraExplorer” folder in the “Application Data” space of the current user. The full path of the saved file is provided in the method’s return value. You can also use %APPDATA% in Windows Explorer to locate the path on your computer
 	            /// <para>Note: If the folder contains a file by the same name, the existing file is overwritten without a prompt</para>
 	            /// <para>Note: The Application Data folder path changes between different users and different Windows operating systems. To find the path used by your client look at the %APPDATA% environment variable</para>
 	            ///</summary>
 	            /// <param name="FlyName" type="String">The name for the Fly file. If it is not specified, a FLY extension is added to the file name automatically
 	            /// <para>Note: A file name with a full path cannot be used here</para>
                /// </param>
 	            /// <param name="GroupID" type="String">The group that is being saved to a FLY. You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <returns type="String" />
 	        },
 	        SaveAsKml: function (KmlName, GroupID) {
 	            /// <summary>This method saves the specified group to a compressed KML file (KMZ). For security reasons the file is saved to a predefined “Skyline\TerraExplorer” folder in the “Application Data” space of the current user. The full path of the saved file is provided in the method’s return value. You can also use %APPDATA% in Windows Explorer to locate the path on your computer
 	            /// <para>Note: If the folder contains a file by the same name, the existing file is overwritten without a prompt</para>
 	            /// <para>Note: The Application Data folder path changes between different users and different Windows operating systems. To find the path used by your client look at the %APPDATA% environment variable</para>
 	            /// </summary>
 	            /// <param name="KmlName" type="String">The name for the KML file. If it is not specified, a KMZ extension is added to the file name automatically. If KML extension is specified, an uncompressed KML is created
 	            /// <para>Note: A file name with a full path cannot be used here</para>
                /// </param>
 	            /// <param name="GroupID" type="String">The group that is being saved to a KML file. You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <returns type="String" />
 	        },
 	        SelectItem: function (ID, Flags, Reserved) {
 	            /// <signature>
 	            /// <summary>This method selects an item in the Project Tree</summary>
 	            /// <param name="ID" type="String">The ID of the item to select</param>
 	            /// <returns type="Undefined" />
 	            /// </signature>
 	            /// <signature>
 	            /// <summary>This method selects an item in the Project Tree</summary>
 	            /// <param name="ID" type="String">The ID of the item to select</param>
 	            /// <param name="Flags" type="Number">Currently not used. Always pass 0 (zero) for single selection</param>
 	            /// <returns type="Undefined" />
 	            /// </signature>
 	            /// <signature>
 	            /// <summary>This method selects an item in the Project Tree</summary>
 	            /// <param name="ID" type="String">The ID of the item to select</param>
 	            /// <param name="Flags" type="Number">Currently not used. Always pass 0 (zero) for single selection</param>
 	            /// <param name="Reserved" type="Number">Reserved, always pass 0 (zero). Currently not used</param>
 	            /// <returns type="Undefined" />
 	            /// </signature>
 	        },
 	        SetActivationCode: function (GroupID, ACode, ActivationParam) {
 	            /// <signature>
 	            /// <summary>Determines the default activation action executed when clicking on the locked group symbol</summary>
 	            /// <param name="GroupID" type="String">The ID of the group whose activation action is being set. You can obtain the GroupID by one of the following methods:
 	            /// <para></para>
 	            /// </param>
 	            /// <param name="ACode" type="enum">An enum that instructs the plane on how to approach and focus in on the group.</param>
 	            /// <returns type="Undefined" />
 	            /// </signature>
 	            /// <signature>
 	            /// <summary>Determines the default activation action executed when clicking on the locked group symbol</summary>
 	            /// <param name="GroupID" type="String">The ID of the group whose activation action is being set. You can obtain the GroupID by one of the following methods:
 	            /// <para></para>
 	            /// </param>
 	            /// <param name="ACode" type="enum">An enum that instructs the plane on how to approach and focus in on the group.</param>
 	            /// <param name="ActivationParam" type="String">When ACode is set to AC_SHOW, the ActivationParam can be one of the following values:
 	            /// <para>0-The item is set to hide, 1-The item is set to show</para>
                /// </param>
 	            /// <returns type="Undefined" />
 	            /// </signature>
 	        },
 	        SetClientData: function (ID, Namespace, ClientData) {
 	            /// <summary>This method stores a text string in the Project Tree item’s global namespace for the purpose of describing the item or any other purpose. You can store several text strings by using different namespaces. You can read this string by using the GetClientData method</summary>
 	            /// <param name="ID" type="String">The item whose client data we set</param>
 	            /// <param name="Namespace" type="String">The identifier of the text string. You can store several text strings in the group by using different namespaces. You must use the correct namespace when accessing the client data using the GetClientData method</param>
 	            /// <param name="ClientData" type="String">A text string. Note that the input string should not contain the formatting characters '\n' and '\r'</param>
 	            /// <returns type="Undefined" />
 	        },
 	        SetGroupEndTime: function (GroupID, newVal) {
 	            /// <summary>Determines the date and time when the group should stop being visible on the terrain</summary>
 	            /// <param name="GroupID" type="String">The Project Tree group whose end time is being set. You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <param name="newVal" type="Object">The end date and time for the group</param>
 	            /// <returns type="Undefined" />
 	        },
 	        SetGroupLocation: function (GroupID, newVal) {
 	            /// <summary>Determines the location parameters for a specified group</summary>
 	            /// <param name="GroupID" type="String">Refers to the group whose location you are about to change. You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <param name="newVal" type="Object">The location parameters for the specified group</param>
 	            /// <returns type="Undefined" />
 	        },
 	        SetGroupStartTime: function (GroupID) {
 	            /// <summary>Determines the date and time when a group should start being visible</summary>
 	            /// <param name="GroupID" type="String">The Project Tree group whose start time is being set. You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <returns type="Object" />
 	        },
 	        SetParent: function (ID, ParentGroupID) {
 	            /// <summary>Moves an item to a different group</summary>
 	            /// <param name="ID" type="String">Specifies which item is placed within the new parent group</param>
 	            /// <param name="ParentGroupID" type="String">The ID of the item that becomes the new parent for the item specified by the ID parameter. The ParentGroupID must be a valid group ID</param>
 	            /// <returns type="Undefined" />
 	        },
 	        SetVisibility: function (ID,bShow) {
 	            /// <summary>This method sets a Project Tree item’s visibility on the terrain</summary>
 	            /// <param name="ID" type="String">The ID of the item</param>
 	            /// <param name="bShow" type="Boolean">A Boolean that determines whether the Project Tree item is visible on the terrain</param>
 	            /// <returns type="Undefined" />
 	        },
 	        SortGroup: function (GroupID, SType) {
 	            /// <signature>
 	            /// <summary>Sorts the items in the group according to the specified sort type</summary>
 	            /// <param name="GroupID" type="String">The ID of the group that is to be sorted. If it is set to zero, the root group is sorted. You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <returns type="Undefined" />
 	            /// </signature>
 	            /// <signature>
 	            /// <summary>Sorts the items in the group according to the specified sort type</summary>
 	            /// <param name="GroupID" type="String">The ID of the group that is to be sorted. If it is set to zero, the root group is sorted. You can obtain the GroupID by one of the following methods:
 	            /// <para>IProjectTree.CreateGroup, IProjectTree.FindItem, IProjectTree.GetNextItem</para>
 	            /// </param>
 	            /// <param name="SType" type="SortType">An enum that determines the type of sort that is performed on the group</param>
 	            /// <returns type="Undefined" />
 	            /// </signature>
            },
        };
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
            ClientData: function(Namespace, pVal){
                /// <signature>
                /// <summary>Gets an array of text strings assigned to each object. The array is indexed by a Namespace identifier</summary>
                /// <param name="Namespace" type="String">The identifier of the text string. You can store several text strings in the group by using different namespaces</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Gets and sets an array of text strings assigned to each object. The array is indexed by a Namespace identifier</summary>
                /// <param name="Namespace" type="String">The identifier of the text string. You can store several text strings in the group by using different namespaces</param>
                /// <param name="pVal" type="String">A text string</param>
                /// <returns type="Undefined" />
                /// </signature>
            },
            /// <field type="String">Gets the ID of the object</field>
            ID: '',
            /// <field type="Number">Gets an enum that identifies the type of the object</field>
            ObjectType: 0,
            SaveInFly:true,
            GetParam:function(){
                /// <summary>Reserved. Currently not used</summary>
            },
            SetParam:function(){
                /// <summary>Reserved. Currently not used</summary>
            }
        }
    }


}

/*
 * Note:
 *  -How to switch intellisense depending on version
 * 
 * GetClientData: (version<6.6) ? function (ID, Namespace) {
 *      /// <summary>65</summary>
 *      /// <returns type="" />
 *  } : function (ID, Namespace) {
 *      /// <summary>66</summary>
 *  }
 * 
 */