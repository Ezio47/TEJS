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

        /// <field type="ITEVersionInfo">Gets information about the version of TerraExplorer that is running</field>
        , Version: new ITEVersionInfo()

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
        return {
            CalculateVolume: function (arrObjectID, SampleInterval) {
                /// <summary>Analyzes the amount of terrain removed or added by selected Modify Terrain objects</summary>
                /// <param name="arrObjectID" type="Object">An array that contains the IDs of the ITerrainModifier objects to be analyzed</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points. The smaller the sample interval, the more accurate the calculation, but the longer it takes to calculate</param>
                /// <returns type="IVolumeAnalysisInfo" />
            },
            Create3DViewshed: function (ViewerPosition, FieldOfViewX, FieldOfViewY, Distance, ParentGroupID, Description) {
                /// <signature>
                /// <summary>Creates a graphical representation of all regions on the terrain and on 3D models and objects that are visible, within a field of view, from a given viewing point</summary>
                /// <param name="ViewerPosition" type="IPosition">An IPosition66 representing the viewing point position, defined by its coordinates in the 3D World</param>
                /// <param name="FieldOfViewX" type="Double">The horizontal angle limits of the viewshed. Values are in degrees from 0 to 120. For a spherical 3D viewshed, the value is 360</param>
                /// <param name="FieldOfViewY" type="Double">The vertical angle limits of the viewshed. Values are in degrees from 0 to 120. For a spherical 3D viewshed, the value is 360</param>
                /// <param name="Distance" type="Double">Length, in meters, of the viewshed analysis from the viewer position</param>
                /// <returns type="I3DViewshed" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a graphical representation of all regions on the terrain and on 3D models and objects that are visible, within a field of view, from a given viewing point</summary>
                /// <param name="ViewerPosition" type="IPosition">An IPosition66 representing the viewing point position, defined by its coordinates in the 3D World</param>
                /// <param name="FieldOfViewX" type="Double">The horizontal angle limits of the viewshed. Values are in degrees from 0 to 120. For a spherical 3D viewshed, the value is 360</param>
                /// <param name="FieldOfViewY" type="Double">The vertical angle limits of the viewshed. Values are in degrees from 0 to 120. For a spherical 3D viewshed, the value is 360</param>
                /// <param name="Distance" type="Double">Length, in meters, of the viewshed analysis from the viewer position</param>
                /// <param name="ParentGroupID" type="String">The Project Tree group in which the model is created. If it is set to an empty string, the object is created under the root</param>
                /// <returns type="I3DViewshed" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a graphical representation of all regions on the terrain and on 3D models and objects that are visible, within a field of view, from a given viewing point</summary>
                /// <param name="ViewerPosition" type="IPosition">An IPosition66 representing the viewing point position, defined by its coordinates in the 3D World</param>
                /// <param name="FieldOfViewX" type="Double">The horizontal angle limits of the viewshed. Values are in degrees from 0 to 120. For a spherical 3D viewshed, the value is 360</param>
                /// <param name="FieldOfViewY" type="Double">The vertical angle limits of the viewshed. Values are in degrees from 0 to 120. For a spherical 3D viewshed, the value is 360</param>
                /// <param name="Distance" type="Double">Length, in meters, of the viewshed analysis from the viewer position</param>
                /// <param name="ParentGroupID" type="String">The Project Tree group in which the model is created. If it is set to an empty string, the object is created under the root</param>
                /// <param name="Description" type="String">The name of the viewshed object as it appears in the Project Tree. If an empty string is passed to this parameter, TerraExplorer assigns it a unique name</param>
                /// <returns type="I3DViewshed" />
                /// </signature>
            },
            CreateContourMap: function (UpperLeftX, UpperLeftY, LowerRightX, LowerRightY, DisplayStyle, PaletteID, GroupID, Description) {
                /// <summary>Creates a topographic map that portrays differences in terrain elevation by connecting points of equal elevation with contour lines or by coloring terrain according to varying altitudes. The contour palettes and/or contour lines can be applied to a specified rectangular area, or to the entire terrain using the CoverageArea property of the resulting IContourMap object</summary>
                /// <param name="UpperLeftX" type="Double">The West-East coordinate of the contour map’s upper left corner in the project’s coordinate system units</param>
                /// <param name="UpperLeftY" type="Double">The North-South coordinate of the contour map’s upper left corner in the project’s coordinate system units</param>
                /// <param name="LowerRightX" type="Double">The West-East coordinate of the contour map’s lower right corner in the project’s coordinate system units</param>
                /// <param name="LowerRightY" type="Double">The North-South coordinate of the contour map’s lower right corner in the project’s coordinate system units</param>
                /// <param name="DisplayStyle" type="ContourDisplayStyle">An enum that determines how the contour map is displayed</param>
                /// <param name="PaletteID" type="String">The GUID for the palette. GUIDs are listed in the palette XMLs found in the Pseudo directory, which is located under the [TerraExplorer installation]\ Lang\1033 folder and under %APPDATA%\Skyline\TerraExplorer
                /// <para>Note: 1033 is the English language directory. If you are running TerraExplorer in a different language, the Pseudo folder will be located under your language directory</para>
                /// </param>
                /// <param name="GroupID" type="String">The Project Tree group in which the contour map object is created. If it is set to an empty string, the object is created under the root</param>
                /// <param name="Description" type="String">The name of the contour map object as it appears in the Project Tree. If an empty string is passed into this parameter, TerraExplorer assigns it a unique name</param>
                /// <returns type="IContourMap" />
            },
            CreateFloodContinuousWaterRise: function (OriginX, OriginY, Radius, WaterRiseRate, SampleInterval, TimeSampleIntervalHours, StartTime, EndTime, GroupID, Description) {
                /// <signature>
                /// <summary>Creates a set of polygons showing the land area covered by water when the water level is rising at a constant rate over a certain period of time (rate of rise and rise interval set by user)</summary>
                /// <param name="OriginX" type="Double">The flood origin’s x-coordinate (longitude)</param>
                /// <param name="OriginY" type="Double">The flood origin’s y-coordinate (latitude)</param>
                /// <param name="Radius" type="Double">The radius of the area on which the flood analysis is being performed</param>
                /// <param name="WaterRiseRate" type="Double">The rate the water is rising (meters per hour)</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points. The smaller the sample interval, the more accurate the calculation, but the longer it takes to calculate</param>
                /// <param name="TimeSampleIntervalHours" type="Double">The time between terrain samples within the time period between the StartTime and EndTime. A shorter sample size is more accurate but slower to calculate</param>
                /// <param name="StartTime" type="Object">The date and time the water begins to rise</param>
                /// <param name="EndTime" type="Object">The date and time the water stops rising</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a set of polygons showing the land area covered by water when the water level is rising at a constant rate over a certain period of time (rate of rise and rise interval set by user)</summary>
                /// <param name="OriginX" type="Double">The flood origin’s x-coordinate (longitude)</param>
                /// <param name="OriginY" type="Double">The flood origin’s y-coordinate (latitude)</param>
                /// <param name="Radius" type="Double">The radius of the area on which the flood analysis is being performed</param>
                /// <param name="WaterRiseRate" type="Double">The rate the water is rising (meters per hour)</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points. The smaller the sample interval, the more accurate the calculation, but the longer it takes to calculate</param>
                /// <param name="TimeSampleIntervalHours" type="Double">The time between terrain samples within the time period between the StartTime and EndTime. A shorter sample size is more accurate but slower to calculate</param>
                /// <param name="StartTime" type="Object">The date and time the water begins to rise</param>
                /// <param name="EndTime" type="Object">The date and time the water stops rising</param>
                /// <param name="GroupID" type="String">The Project Tree group in which the flood analysis object is created. If it is set to an empty string, the object is created under the root</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a set of polygons showing the land area covered by water when the water level is rising at a constant rate over a certain period of time (rate of rise and rise interval set by user)</summary>
                /// <param name="OriginX" type="Double">The flood origin’s x-coordinate (longitude)</param>
                /// <param name="OriginY" type="Double">The flood origin’s y-coordinate (latitude)</param>
                /// <param name="Radius" type="Double">The radius of the area on which the flood analysis is being performed</param>
                /// <param name="WaterRiseRate" type="Double">The rate the water is rising (meters per hour)</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points. The smaller the sample interval, the more accurate the calculation, but the longer it takes to calculate</param>
                /// <param name="TimeSampleIntervalHours" type="Double">The time between terrain samples within the time period between the StartTime and EndTime. A shorter sample size is more accurate but slower to calculate</param>
                /// <param name="StartTime" type="Object">The date and time the water begins to rise</param>
                /// <param name="EndTime" type="Object">The date and time the water stops rising</param>
                /// <param name="GroupID" type="String">The Project Tree group in which the flood analysis object is created. If it is set to an empty string, the object is created under the root</param>
                /// <param name="Description" type="String">The name of the flood analysis object as it appears in the Project Tree. If an empty string is passed into this parameter, TerraExplorer assigns it a unique name</param>
                /// <returns type="String" />
                /// </signature>
            },
            CreateFloodSingleWaterRise: function (OriginX, OriginY, Radius, TotalWaterLevelRaise, SampleInterval, ParentGroupID, Description) {
                /// <signature>
                /// <summary>Creates a set of polygons showing the land area covered by water when the water level rises once (initial water level set by user)</summary>
                /// <param name="OriginX" type="Double">The flood origin’s x-coordinate (longitude)</param>
                /// <param name="OriginY" type="Double">The flood origin’s y-coordinate (latitude)</param>
                /// <param name="Radius" type="Double">The radius of the area on which the flood analysis is being performed</param>
                /// <param name="TotalWaterLevelRaise" type="Double">The total number of meters the water rises</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points. The smaller the sample interval, the more accurate the calculation, but the longer it takes to calculate</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a set of polygons showing the land area covered by water when the water level rises once (initial water level set by user)</summary>
                /// <param name="OriginX" type="Double">The flood origin’s x-coordinate (longitude)</param>
                /// <param name="OriginY" type="Double">The flood origin’s y-coordinate (latitude)</param>
                /// <param name="Radius" type="Double">The radius of the area on which the flood analysis is being performed</param>
                /// <param name="TotalWaterLevelRaise" type="Double">The total number of meters the water rises</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points. The smaller the sample interval, the more accurate the calculation, but the longer it takes to calculate</param>
                /// <param name="ParentGroupID" type="String">The ID of the group in which the flood analysis object is created. If it is set to an empty string, the object is created under the root</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a set of polygons showing the land area covered by water when the water level rises once (initial water level set by user)</summary>
                /// <param name="OriginX" type="Double">The flood origin’s x-coordinate (longitude)</param>
                /// <param name="OriginY" type="Double">The flood origin’s y-coordinate (latitude)</param>
                /// <param name="Radius" type="Double">The radius of the area on which the flood analysis is being performed</param>
                /// <param name="TotalWaterLevelRaise" type="Double">The total number of meters the water rises</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points. The smaller the sample interval, the more accurate the calculation, but the longer it takes to calculate</param>
                /// <param name="ParentGroupID" type="String">The ID of the group in which the flood analysis object is created. If it is set to an empty string, the object is created under the root</param>
                /// <param name="Description" type="String">The name of the flood analysis object as it appears in the Project Tree. If an empty string is passed into this parameter, TerraExplorer assigns it a unique name</param>
                /// <returns type="String" />
                /// </signature>
            },
            CreateLineOfSight: function (ViewerPosition, SampleInterval, arrTargetPosition, ParentGroupID, Description) {
                /// <signature>
                /// <summary>Creates a visual marker for the existence of a line of sight between two points</summary>
                /// <param name="ViewerPosition" type="IPosition">The position of the viewer, defined by its coordinates in the 3D world</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each line. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="arrTargetPosition" type="Object">An array of IPosition objects that contains the target positions in the 3D World</param>
                /// <returns type="ILineOfSight" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a visual marker for the existence of a line of sight between two points</summary>
                /// <param name="ViewerPosition" type="IPosition">The position of the viewer, defined by its coordinates in the 3D world</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each line. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="arrTargetPosition" type="Object">An array of IPosition objects that contains the target positions in the 3D World</param>
                /// <param name="ParentGroupID" type="String">The Project Tree group in which the line of sight object is created. If it is set to an empty string, the object is created under the root</param>
                /// <returns type="ILineOfSight" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a visual marker for the existence of a line of sight between two points</summary>
                /// <param name="ViewerPosition" type="IPosition">The position of the viewer, defined by its coordinates in the 3D world</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each line. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="arrTargetPosition" type="Object">An array of IPosition objects that contains the target positions in the 3D World</param>
                /// <param name="ParentGroupID" type="String">The Project Tree group in which the line of sight object is created. If it is set to an empty string, the object is created under the root</param>
                /// <param name="Description" type="String">The name of the line of sight object as it appears in the Project Tree. If an empty string is passed into this parameter, TerraExplorer assigns it a unique name</param>
                /// <returns type="ILineOfSight" />
                /// </signature>
            },
            CreateSlopeMap: function (UpperLeftX, UpperLeftY, LowerRightX, LowerRightY, DisplayStyle, PaletteID, GroupID, Description) {
                /// <summary>Creates a slope map on the terrain that can show degree (steepness) and/or aspect (direction). The terrain is colored according to degree of slope, and arrows display the direction of the slope. The color map and arrows can be applied to a specified rectangular area or to the entire terrain using the CoverageArea property of the resulting ISlopeMap object</summary>
                /// <param name="UpperLeftX" type="Double">The West-East coordinate of the slope map’s upper left corner in the project’s coordinate system units</param>
                /// <param name="UpperLeftY" type="Double">The North-South coordinate of the slope map’s upper left corner in the project’s coordinate system units</param>
                /// <param name="LowerRightX" type="Double">The West-East coordinate of the slope map’s lower right corner in the project’s coordinate system units</param>
                /// <param name="LowerRightY" type="Double">The North-South coordinate of the slope map’s lower right corner in the project’s coordinate system units</param>
                /// <param name="DisplayStyle" type="SlopeDisplayStyle">An enum that determines how the slope map is displayed</param>
                /// <param name="PaletteID" type="String">The GUID for the palette. GUIDs are listed in the palette XMLs found in the Pseudo directory, which is located under the [TerraExplorer installation]\ Lang\1033 folder and under %APPDATA%\Skyline\TerraExplorer</param>
                /// <param name="GroupID" type="String">The Project Tree group in which the slope map object is created. If it is set to an empty string, the object is created under the root</param>
                /// <param name="Description" type="String">The name of the slope map object as it appears in the Project Tree. If an empty string is passed into this parameter, TerraExplorer assigns it a unique name</param>
                /// <returns type="ISlopeMap" />
            },
            CreateTerrainProfile: function (arrPoints) {
                /// <summary>Creates a graphical representation of the terrain elevation profile along a path, displaying related information on this profile such as maximum and minimum elevation values and slopes</summary>
                /// <param name="arrPoints" type="Object">An array that contains pairs of doubles marking the path to be analyzed. Each pair is composed of an x-coordinate and a y-coordinate</param>
                /// <returns type="Undefined" />
            },
            CreateThreatDome: function(){
                /// <summary>Obsolete. Use ICommand.Execute (setting the CommandID parameter to 1149 and the parameters parameter to 33) to create the new threat dome</summary>
                /// <deprecated type="remove"></deprecated>
            },
            CreateViewshed: function (ViewerPosition, FieldOfView, SampleInterval, RaySpacing, TargetHeightAboveGround, TimeStart, TimeEnd, ParentGroupID, Description) {
                /// <signature>
                /// <summary>Creates a graphical representation of all the visible areas of the terrain within a field of view, from a given viewing point</summary>
                /// <param name="ViewerPosition" type="IPosition">An IPosition representing the viewing point position, defined by its coordinates in the 3D World</param>
                /// <param name="FieldOfView" type="Double">The angular extent of the 3D World that can be seen. The default is set to 53 degrees</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each ray. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="RaySpacing" type="Double">The space in degrees between each ray that TerraExplorer samples. TerraExplorer samples several rays (lines of sight) in the area sector. The smaller the ray spacing, the more accurate the measurement, but the longer it takes to calculate</param>
                /// <param name="TargetHeightAboveGround" type="Double">The target height</param>
                /// <param name="TimeStart" type="Object">The start time for the visibility of the Viewshed Analysis group of objects in the 3D Window</param>
                /// <param name="TimeEnd" type="Object">The end time for the visibility of the Viewshed Analysis group of objects in the 3D Window</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a graphical representation of all the visible areas of the terrain within a field of view, from a given viewing point</summary>
                /// <param name="ViewerPosition" type="IPosition">An IPosition representing the viewing point position, defined by its coordinates in the 3D World</param>
                /// <param name="FieldOfView" type="Double">The angular extent of the 3D World that can be seen. The default is set to 53 degrees</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each ray. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="RaySpacing" type="Double">The space in degrees between each ray that TerraExplorer samples. TerraExplorer samples several rays (lines of sight) in the area sector. The smaller the ray spacing, the more accurate the measurement, but the longer it takes to calculate</param>
                /// <param name="TargetHeightAboveGround" type="Double">The target height</param>
                /// <param name="TimeStart" type="Object">The start time for the visibility of the Viewshed Analysis group of objects in the 3D Window</param>
                /// <param name="TimeEnd" type="Object">The end time for the visibility of the Viewshed Analysis group of objects in the 3D Window</param>
                /// <param name="ParentGroupID" type="String">The Project Tree group in which the model is created. If it is set to an empty string, the object is created under the root</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a graphical representation of all the visible areas of the terrain within a field of view, from a given viewing point</summary>
                /// <param name="ViewerPosition" type="IPosition">An IPosition representing the viewing point position, defined by its coordinates in the 3D World</param>
                /// <param name="FieldOfView" type="Double">The angular extent of the 3D World that can be seen. The default is set to 53 degrees</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each ray. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="RaySpacing" type="Double">The space in degrees between each ray that TerraExplorer samples. TerraExplorer samples several rays (lines of sight) in the area sector. The smaller the ray spacing, the more accurate the measurement, but the longer it takes to calculate</param>
                /// <param name="TargetHeightAboveGround" type="Double">The target height</param>
                /// <param name="TimeStart" type="Object">The start time for the visibility of the Viewshed Analysis group of objects in the 3D Window</param>
                /// <param name="TimeEnd" type="Object">The end time for the visibility of the Viewshed Analysis group of objects in the 3D Window</param>
                /// <param name="ParentGroupID" type="String">The Project Tree group in which the model is created. If it is set to an empty string, the object is created under the root</param>
                /// <param name="Description" type="String">The name of the viewshed object as it appears in the Project Tree. If an empty string is passed into this parameter, TerraExplorer assigns it a unique name</param>
                /// <returns type="String" />
                /// </signature>
            },
            CreateViewshedOnRoute: function (Route, AnalysisType, ViewerHeight, Distance, SampleInterval, RaySpacing, DistanceBetweenWaypoints, TimeStart, TimeEnd, ParentGroupID, Description) {
                /// <signature>
                /// <summary>Creates a graphical representation of all the visible areas of the terrain, within a field of view, from a given viewing point. The user can define viewer height and radius of viewshed analysis. The calculated route viewshed can be displayed as:
                /// <para>----Individual viewshed results for each selected point along the route</para>
                /// <para>----A single composite viewshed showing visible area from any of the route’s waypoints</para>
                /// <para>----A series of individual viewshed results that display according to a set timespan</para>
                ///</summary>
                /// <param name="Route" type="ILineString">An ILineString object representing the geometry that defines the route</param>
                /// <param name="AnalysisType" type="MultipleViewshedAnalysisType">An enum that determines the Viewshed analysis type</param>
                /// <param name="ViewerHeight" type="Double">The height of the viewer waypoints on the route</param>
                /// <param name="Distance" type="Double">The radius of the viewshed analysis from each of the route’s waypoints</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each ray. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="RaySpacing" type="Double">The space in degrees between each ray that TerraExplorer samples. TerraExplorer samples several rays (lines of sight) in the area sector. The smaller the ray spacing, the more accurate the measurement, but the longer it takes to calculate</param>
                /// <param name="DistanceBetweenWaypoints" type="Double">The distance between viewsheds along the route</param>
                /// <param name="TimeStart" type="Object">The start time assigned to the Viewshed on Route results</param>
                /// <param name="TimeEnd" type="Object">The end time assigned to the Viewshed on Route results</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a graphical representation of all the visible areas of the terrain, within a field of view, from a given viewing point. The user can define viewer height and radius of viewshed analysis. The calculated route viewshed can be displayed as:
                /// <para>----Individual viewshed results for each selected point along the route</para>
                /// <para>----A single composite viewshed showing visible area from any of the route’s waypoints</para>
                /// <para>----A series of individual viewshed results that display according to a set timespan</para>
                ///</summary>
                /// <param name="Route" type="ILineString">An ILineString object representing the geometry that defines the route</param>
                /// <param name="AnalysisType" type="MultipleViewshedAnalysisType">An enum that determines the Viewshed analysis type</param>
                /// <param name="ViewerHeight" type="Double">The height of the viewer waypoints on the route</param>
                /// <param name="Distance" type="Double">The radius of the viewshed analysis from each of the route’s waypoints</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each ray. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="RaySpacing" type="Double">The space in degrees between each ray that TerraExplorer samples. TerraExplorer samples several rays (lines of sight) in the area sector. The smaller the ray spacing, the more accurate the measurement, but the longer it takes to calculate</param>
                /// <param name="DistanceBetweenWaypoints" type="Double">The distance between viewsheds along the route</param>
                /// <param name="TimeStart" type="Object">The start time assigned to the Viewshed on Route results</param>
                /// <param name="TimeEnd" type="Object">The end time assigned to the Viewshed on Route results</param>
                /// <param name="ParentGroupID" type="String">The Project Tree group in which the model is created. If it is set to an empty string, the object is created under the root</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Creates a graphical representation of all the visible areas of the terrain, within a field of view, from a given viewing point. The user can define viewer height and radius of viewshed analysis. The calculated route viewshed can be displayed as:
                /// <para>----Individual viewshed results for each selected point along the route</para>
                /// <para>----A single composite viewshed showing visible area from any of the route’s waypoints</para>
                /// <para>----A series of individual viewshed results that display according to a set timespan</para>
                ///</summary>
                /// <param name="Route" type="ILineString">An ILineString object representing the geometry that defines the route</param>
                /// <param name="AnalysisType" type="MultipleViewshedAnalysisType">An enum that determines the Viewshed analysis type</param>
                /// <param name="ViewerHeight" type="Double">The height of the viewer waypoints on the route</param>
                /// <param name="Distance" type="Double">The radius of the viewshed analysis from each of the route’s waypoints</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain samples for the measurement along each ray. A smaller sample size is more accurate but slower to calculate</param>
                /// <param name="RaySpacing" type="Double">The space in degrees between each ray that TerraExplorer samples. TerraExplorer samples several rays (lines of sight) in the area sector. The smaller the ray spacing, the more accurate the measurement, but the longer it takes to calculate</param>
                /// <param name="DistanceBetweenWaypoints" type="Double">The distance between viewsheds along the route</param>
                /// <param name="TimeStart" type="Object">The start time assigned to the Viewshed on Route results</param>
                /// <param name="TimeEnd" type="Object">The end time assigned to the Viewshed on Route results</param>
                /// <param name="ParentGroupID" type="String">The Project Tree group in which the model is created. If it is set to an empty string, the object is created under the root</param>
                /// <param name="Description" type="String">The name of the viewshed object as it appears in the Project Tree. If an empty string is passed into this parameter, TerraExplorer assigns it a unique name</param>
                /// <returns type="String" />
                /// </signature>
            },
            EndVisibilityQuery: function(){
                /// <summary>This method frees resources for a call from either StartShadowVisibilityQuery or StartViewshedVisibilityQuery</summary>
                /// <returns type="Undefined" />
            },
            MeasureTerrainArea: function (pIGeometry) {
                /// <summary>Measures the area of the horizontal projection (2D measurement) of a defined region, even if some or all of the defined region encompasses mountainous terrain</summary>
                /// <param name="pIGeometry" type="IGeometry">An IGeometry representing the geometric properties of the defined region</param>
                /// <returns type="Number" />
            },
            MeasureTerrainGroundDistance: function(pIGeometry, sampleInterval, IncludeGroundObjects){
                /// <summary>Measures the distance along a line path taking into account the terrain contour</summary>
                /// <param name="pIGeometry" type="IGeometry">An IGeometry representing the geometric properties of the defined path. Only ILineString geometries are accepted</param>
                /// <param name="sampleInterval" type="Double">The distance between terrain sample points. Pass zero (0) for automatic interval</param>
                /// <param name="IncludeGroundObjects" type="Boolean">A Boolean that determines if ground objects are taken into account in calculating the distance measurement</param>
                /// <returns type="Number" />
            },
            MeasureTerrainPerimeter: function (pIGeometry) {
                /// <summary>Measures the perimeter of the horizontal projection (2D measurement). The region measured is the horizontal projection of the defined region, even if some or all of the defined region encompasses mountainous terrain</summary>
                /// <param name="pIGeometry" type="IGeometry">An IGeometry representing the geometric properties of the defined region</param>
                /// <returns type="Number" />
            },
            MeasureTerrainProfile: function (KeyPoints, SampleInterval, IncludeGroundObjects) {
                /// <summary>Measures the terrain elevation profile along a defined path, returning a polyline with the X and Y coordinates of each of the sampled points along the path, and the Z value that was sampled from the terrain for each of these points</summary>
                /// <param name="KeyPoints" type="IGeometry">An IGeometry with the X and Y coordinates of the points marking the path to be analyzed</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points along the path. Pass zero (0) for automatic interval</param>
                /// <param name="IncludeGroundObjects" type="Boolean">A Boolean that determines if ground objects are taken into account in calculating the terrain profile</param>
                /// <returns type="IGeometry" />
            },
            MeasureTerrainSurface: function (pIGeometry, SampleInterval) {
                /// <summary>Measures the surface area (3D measurement) of the defined region. The measurement takes into account terrain contours</summary>
                /// <param name="pIGeometry" type="IGeometry">An IGeometry representing the geometric properties of the defined region</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points</param>
                /// <returns type="Number" />
            },
            MeasureTerrainSurfacePerimeter: function (pIGeometry, SampleInterval) {
                /// <summary>Measures the perimeter of the surface of the defined region. The perimeter measured takes into account terrain contours</summary>
                /// <param name="pIGeometry" type="IGeometry">An IGeometry representing the geometric properties of the defined region</param>
                /// <param name="SampleInterval" type="Double">The distance between terrain sample points</param>
                /// <returns type="Double" />
            },
            QueryElevationBuffer: function (UpperLeftX, UpperLeftY, ResX, ResY, DimensionX, DimensionY) {
                /// <summary>This method returns an array of elevation values for a designated area of the terrain. The query includes all ground objects, modify terrain objects, 3DML, etc. that are currently loaded on the terrain. If a layer is being streamed, this QueryElevationBuffer only returns elevation values for features that were already streamed at the time this method is called.
                /// <para>The designated area’s coordinates and coordinate system units should be passed in the coordinate system of the terrain and they are not translated by ICoordServices.SourceCoordinateSystem like other places in the API. See ITerrain.CoordinateSystem for information.</para>
                /// <para>Make sure the terrain opacity is set to 100% (ITerrain.Opacity = 1)  before calling this method.</para>
                /// </summary>
                /// <param name="UpperLeftX" type="Double">The West-East coordinate of the elevation layer’s upper left corner in the terrain coordinate system</param>
                /// <param name="UpperLeftY" type="Double">The North-South coordinate of the elevation layer’s upper left corner in the terrain coordinate system</param>
                /// <param name="ResX" type="Double">The X cell resolution in the terrain coordinate system units</param>
                /// <param name="ResY" type="Double">The Y cell resolution in the terrain coordinate system units</param>
                /// <param name="DimensionX" type="Number">The width, in pixels, of the raster array</param>
                /// <param name="DimensionY" type="Number">The height, in pixels, of the raster array</param>
                /// <returns type="Object" />
            },
            QueryPointVisibility: function (QueryPosition) {
                /// <summary>This method executes a visibility query (either StartShadowVisibilityQuery or StartViewshedVisibilityQuery) based on the parameters set by the last StartXXVisibilityQuery call. Multiple calls to QueryPointVisibility can be made. When the queries are finished, EndVisibilityQuery should be called to free system resources</summary>
                /// <param name="QueryPosition" type="IPosition">An IPosition representing the position for which the query is being performed</param>
                /// <returns type="Number" />
            },
            QueryVisibilityDistance: function (QueryPosition) {
                /// <summary>Based on the parameters set by the last StartXXVisibilityQuery call (either StartShadowVisibilityQuery or StartViewshedVisibilityQuery), this method gets the point along the path from the origin of the shadow (QuerySperePosition) or viewshed source where the visibility or shadow is blocked by the terrain or a ground object</summary>
                /// <param name="QueryPosition" type="IPosition">An IPosition representing the position of the endpoint of the path from the origin of the shadow (QuerySperePosition) or viewshed source that is being queried for the presence of a terrain or ground object</param>
                /// <returns type="Number" />
            },
            StartShadowVisibilityQuery: function(QuerySpherePosition, QuerySphereRadius, Type){
                /// <summary>Initializes a shadow visibility query for a selected position and shadow effect. After this initialization, subsequent calls can be made to QueryPointVisibility to calculate shadow visibility or to QueryVisibilityDistance to return the point where the shadow is blocked. The query can be based on the shadow effect of selected objects (selection Shadow) or of all the project’s objects (global shadow). Shadows are displayed using the ICommand66.Execute method (set the CommandID parameter to 2118 for a global shadow and to 2119 for a selection shadow)
                /// <para>Note: The selection of objects for a selection shadow can only be performed through the user interface since it is not currently supported by the API</para>
                /// </summary>
                /// <param name="QuerySpherePosition" type="IPosition">The center point of the sphere that defines the region in which the shadow analysis is performed</param>
                /// <param name="QuerySphereRadius" type="Double">The radius of the sphere that defines the region in which the shadow analysis is performed</param>
                /// <param name="Type" type="ShadowType">An enum that defines what shadow effect should be considered in the query</param>
                /// <returns type="String" />
            },
            StartViewshedVisibilityQuery: function(ViewshedID, Quality){
                /// <summary>Initializes a viewshed visibility query for a specific viewshed. After this initialization, subsequent calls can be made to QueryPointVisibility to calculate the visibility of a selected position on a 3D viewshed (passed in this method’s ViewshedID parameter) from the observer viewpoint of the 3D viewshed or to QueryVisibilityDistance to get the point where the view is blocked</summary>
                /// <param name="ViewshedID" type="String">The ID of the required I3DViewshed66 object that defines the viewshed on which the analysis is being performed</param>
                /// <param name="Quality" type="ViewshedQuality">An enum that determines the accuracy level of the viewshed query</param>
                /// <returns type="Undefined" />
            }
        };
    }
    function IApplication()
    {
        return {
            /// <field type="IClipboard">An IClipboard representing TerraExplorer application’s clipboard</field>
            Clipboard:{},
            /// <field type="IContainers">An IContainers representing TerraExplorer application’s containers</field>
            Containers: {},
            /// <field type="String">Gets and sets a Boolean that determines whether TerraExplorer stops the render cycle until the user interface is utilized, or until another call is made passing false as its parameter</field>
            CPUSaveMode: true,
            /// <field type="String">Gets the path for the application data of the user</field>
            DataPath: '',
            /// <field type="String">Gets and sets a Boolean that determines whether the joystick is enabled</field>
            EnableJoystick: true,
            /// <field type="String">Gets the path for the TerraExplorer executable file that started the application, not including the executable name</field>
            ExecutablePath: '',
            /// <field type="IMultiple3DWindows">An IMultiple3DWindows that provides services related to synchronization and management of multiple 3D windows that are embedded in the same application</field>
            Multiple3DWindows: {},
            /// <field type="Boolean">Gets and sets a Boolean that determines whether error messages are suppressed</field>
            SuppressUIErrors: true,
        };
    }
    function ICommand() {
        return {
            	
            CanExecute: function (CommandID, parameter) {
                /// <summary>Checks whether a specific TerraExplorer command can be executed</summary>
                /// <param name="CommandID" type="Number">The ID of the menu command whose status is being checked. See the list of menu commands organized according to TerraExplorer Ribbon tabs. </param>
                /// <param name="parameter" type="Object">The command parameter</param>
                /// <returns type="Boolean" />
            },
            Execute: function (CommandID, parameters) {
                /// <summary>The Execute method activates a TerraExplorer ribbon command
                /// <para>Note: The list below describes the complete set of menu entries in the TerraExplorer product suite. The menu entries that are functioning in your version are determined by your product level (e.g., TerraExplorer Viewer, TerraExplorer Pro), and your licensed extensions.</para>
                /// <para>See: ICommand.CanExecute </para>
                /// </summary>
                /// <param name="CommandID" type="Number">The ID of the menu command to be executed</param>
                /// <param name="parameters" type="Object">The command parameters</param>
                /// <returns type="Undefined" />
            },
            GetValue: function (CommandID) {
                /// <summary>This method returns the value that was set for a specified menu command</summary>
                /// <param name="CommandID" type="Number">The ID of the menu command whose value is being returned. Ribbon commands that are not available in the list below cannot be used from this method. The commands are organized according to Ribbon tabs</param>
                /// <returns type="Object" />
            },
            IsChecked: function (CommandID, parameters) {
                /// <summary>This method determines the checked status of a menu command. IsChecked returns TRUE when the specified command item is selected or toggled on.</summary>
                /// <param name="CommandID" type="Number">The ID of the menu command whose checked status is to be returned. IsChecked applies to the commands in the list of menu commands that are toggled on/off</param>
                /// <param name="parameters" type="Object">The command parameters. See the command parameters in the list of menu commands</param>
                /// <returns type="Boolean" />
            }
        };
    }
    function ICoordServices() {
        return {
            /// <field type="ICoordinateSystem">This interface gives access to layer and MPT coordinate system information and to methods which enable conversion from one coordinate system to another. Each coordinate system is associated with its Well-Known Text (WKT) description, a simple structured, text-based format that is easy to store and share between systems</field>
            SourceCoordinateSystem : {},
            ChooseCSDialog: function (Title, WellKnownText)
            {
                /// <summary>This method opens a high-level dialog that allows the user to select, view, edit, and create a coordinate system</summary>
                /// <param name="Title" type="String">The title of the dialog</param>
                /// <param name="WellKnownText" type="String">The Well-Known Text that should display when opening the dialog box. This Well-Known Text sets the initial coordinate system</param>
                /// <returns type="String" />
            },
            ConvertCoordinateToMGRS : function(X, Y){
                /// <summary>This method converts a given coordinate from the coordinate system of the terrain database to Military Grid Reference System coordinates. The X and Y coordinates to be converted should be given in X and Y respectively. After the method is completed, bstrMGRS returns the converted coordinates as a string value</summary>
                /// <param name="X" type="Double">The X- coordinate in coordinate system units</param>
                /// <param name="Y" type="Double">The Y- coordinate in coordinate system units</param>
                /// <returns type="String" />
            },
            ConvertMGRSToCoordinate: function (bstrMGRS)
            {
                /// <summary>Description</summary>
                /// <param name="bstrMGRS" type="String">The MGRS coordinate as a string value</param>
                /// <returns type="ICoord2D" />
            },
            CreateCoordinateSystem: function (WellKnownText)
            {
                /// <summary>This method creates a coordinate system from a Well-Known Text string</summary>
                /// <param name="WellKnownText" type="String">The Well-Known Text as a string value</param>
                /// <returns type="ICoordinateSystem" />
            },
            GetAimingAngles: function (From, To)
            {
                /// <summary>This method returns the calculated angle between two specified 3D-coordinates</summary>
                /// <param name="From" type="IPosition">An IPosition representing the position of the first coordinate</param>
                /// <param name="To" type="IPosition">An IPosition representing the position of the second coordinate</param>
                /// <returns type="Number" />
            },
            GetDistance: function (X1, Y1, X2, Y2)
            {
                /// <summary>This method returns the horizontal distance between two given coordinates</summary>
                /// <param name="X1" type="Double">X-coordinate of the first point in coordinate system units</param>
                /// <param name="Y1" type="Double">Y-coordinate of the first point in coordinate system units</param>
                /// <param name="X2" type="Double">X-coordinate of the second point in coordinate system units</param>
                /// <param name="Y2" type="Double">Y-coordinate of the second point in coordinate system units</param>
                /// <returns type="Number" />
            },
            GetDistance3D: function (From, To)
            {
                /// <summary>This method calculates the actual aerial distance between two points in the 3D World, taking into account the horizontal and vertical distance difference between the points</summary>
                /// <param name="From" type="IPosition">An IPosition representing the position of the first coordinate</param>
                /// <param name="To" type="IPosition">An IPosition representing the position of the second coordinate</param>
                /// <returns type="Number" />
            },
            MoveCoord: function (X, Y, moveWestEast, moveSouthNorth)
            {
                /// <summary>This method moves a 2D-coordinate by a specified west-east and south-north offset. The X and Y coordinates to be converted should be given in X and Y respectively. After the method is completed, the pVal returns the new coordinates. This method can be used, for example, to calculate the coordinates for drawing a square on a globe database</summary>
                /// <param name="X" type="Double">X-coordinate in coordinate system units</param>
                /// <param name="Y" type="Double">Y-coordinate in coordinate system units</param>
                /// <param name="moveWestEast" type="Double">The offset to move the point on the west-east axis. Positive values move the coordinate to the east, negative values move to the west</param>
                /// <param name="moveSouthNorth" type="Double">The offset to move the point on the south-north axis. Positive values move the coordinate to the north, negative values move to the south</param>
                /// <returns type="ICoord2D" />
            },
            MoveCoordEx: function (Position, moveForward, moveRight, moveUp)
            {
                /// <summary>With this method you can define an orientation for a coordinate system and move a 3D-coordinate along it by a specified Forward-Backward, Right-Left and Up-Down offset. To define the point and orientation, set the X and Y coordinates, altitude relative to the terrain database vertical datum base ellipsoid (absolute height), Yaw Pitch and Roll values, in the IPosition66 properties. To define the movement, set the forward, right, and up values in moveForward, moveRight and moveUp respectively. Use negative values to move in the opposite direction (e.g., negative value for moveForward performs a backward movement)
                /// <para>Note: The rotation parameters are applied to the 3D coordinate in the following order: Roll, Pitch, Yaw</para>
                /// </summary>
                /// <param name="Position" type="IPosition">An IPosition representing the 3D coordinate being moved</param>
                /// <param name="moveForward" type="Double">The offset to move the point forward. Positive values move the forward, negative values move backwards</param>
                /// <param name="moveRight" type="Double">The offset to move the point to the right and left. Positive values move the point to the right, negative values move the point to the left</param>
                /// <param name="moveUp" type="Double">The offset to move the point up and down. Positive values move the point up, negative values move the point down</param>
                /// <returns type="Undefined" />
            },
            Reproject: function (From, To, X, Y)
            {
                /// <summary>This method converts a given coordinate from one coordinate system to another</summary>
                /// <param name="From" type="ICoordinateSystem">The coordinate system in which the coordinate is given</param>
                /// <param name="To" type="ICoordinateSystem">The coordinate system to which you want to convert the coordinate</param>
                /// <param name="X" type="Double">X- coordinate in coordinate system units</param>
                /// <param name="Y" type="Double">Y- coordinate in coordinate system units</param>
                /// <returns type="ICoord2D" />
            }
        };
    }
    function ICreator()
    {
        return {
            /// <field type="IGeometryCreator">An IGeometryCreator containing methods to create geometry objects</field>
            GeometryCreator: {},
            Create3DArrow: function (Position, Length, Style, ObjectHeight, LineColor, FillColor, GroupID, Description)
            {
                /// <summary>Creates a 3-dimensional arrow and places it in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Length" type="xxxxx">Description</param>
                /// <param name="Style" type="xxxxx">Description</param>
                /// <param name="ObjectHeight" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            Create3DPolygon: function (pIGeometry, ObjectHeight, LineColor, FillColor, AltitudeType, GroupID, Description)
            {
                /// <summary>Creates an ITerrain3DPolygon object</summary>
                /// <param name="pIGeometry" type="xxxxx">Description</param>
                /// <param name="ObjectHeight" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="AltitudeType" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateArc: function (Position, RadiusX, RadiusY, StartAngle, EndEngle, LineColor, FillColor, NumOfSegments, GroupID, Description)
            {
                /// <summary>Creates an arc in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="RadiusX" type="xxxxx">Description</param>
                /// <param name="RadiusY" type="xxxxx">Description</param>
                /// <param name="StartAngle" type="xxxxx">Description</param>
                /// <param name="EndEngle" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="NumOfSegments" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateArrow: function (Position, Length, Style, LineColor, FillColor, GroupID, Description)
            {
                /// <summary>Creates a 2-dimensional arrow and places it in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Length" type="xxxxx">Description</param>
                /// <param name="Style" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateBox: function (Position, ObjectWidth, ObjectDepth, ObjectHeight, LineColor, FillColor, GroupID, Description)
            {
                /// <summary>Creates a box in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="ObjectWidth" type="xxxxx">Description</param>
                /// <param name="ObjectDepth" type="xxxxx">Description</param>
                /// <param name="ObjectHeight" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateBuilding: function (pIGeometry, RoofHeight, AltitudeType, GroupID, Description)
            {
                /// <summary>Creates a building in the 3D Window</summary>
                /// <param name="pIGeometry" type="xxxxx">Description</param>
                /// <param name="RoofHeight" type="xxxxx">Description</param>
                /// <param name="AltitudeType" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateCircle: function (Position, Radius, LineColor, FillColor, GroupID, Description)
            {
                /// <summary>Creates a circle in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Radius" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateColor: function (Red, Green, Blue, Alpha)
            {
                /// <summary>Creates a custom color by defining the red, green, blue and alpha values</summary>
                /// <param name="Red" type="xxxxx">Description</param>
                /// <param name="Green" type="xxxxx">Description</param>
                /// <param name="Blue" type="xxxxx">Description</param>
                /// <param name="Alpha" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateCone: function (Position, Radius, ObjectHeight, LineColor, FillColor, NumOfSegments, GroupID, Description)
            {
                /// <summary>Creates a cone in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Radius" type="xxxxx">Description</param>
                /// <param name="ObjectHeight" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="NumOfSegments" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateCylinder: function (Position, Radius, ObjectHeight, LineColor, FillColor, NumOfSegments, GroupID, Description)
            {
                /// <summary>Creates a cylinder in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Radius" type="xxxxx">Description</param>
                /// <param name="ObjectHeight" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="NumOfSegments" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateDynamicObject: function (Waypoints, MotionStyle, ObjectType, FileNameOrText, ScaleFactor, AltitudeType, GroupID, Description)
            {
                /// <summary>Creates a dynamic object with waypoints</summary>
                /// <param name="Waypoints" type="xxxxx">Description</param>
                /// <param name="MotionStyle" type="xxxxx">Description</param>
                /// <param name="ObjectType" type="xxxxx">Description</param>
                /// <param name="FileNameOrText" type="xxxxx">Description</param>
                /// <param name="ScaleFactor" type="xxxxx">Description</param>
                /// <param name="AltitudeType" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateEffect: function (Position, EffectsXML, GroupID, Description)
            {
                /// <summary>Creates an ITerrainEffect animated effect object</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="EffectsXML" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateElevationLayer: function (ElevationFileName, UpperLeftX, UpperLeftY, LowerRightX, LowerRightY, InitParam, PlugName, GroupID, Description, HScale, HOffset)
            {
                /// <summary>Loads an elevation layer into the project. Adding the elevation source uses a set of plugins that support multiple file formats. The coordinates of the source can be passed via the UpperLeftX/Y and LowerRightX/Y parameters. If all four coordinate field values are zero, the coordinate information, if available, is read from the file. If the source file coordinate system is not the same as the MPT file Terrain Coordinate system, you can reproject it using ITerrainRasterLayer. CoordinateSystem</summary>
                /// <param name="ElevationFileName" type="xxxxx">Description</param>
                /// <param name="UpperLeftX" type="xxxxx">Description</param>
                /// <param name="UpperLeftY" type="xxxxx">Description</param>
                /// <param name="LowerRightX" type="xxxxx">Description</param>
                /// <param name="LowerRightY" type="xxxxx">Description</param>
                /// <param name="InitParam" type="xxxxx">Description</param>
                /// <param name="PlugName" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <param name="HScale" type="xxxxx">Description</param>
                /// <param name="HOffset" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateEllipse: function (Position, RadiusX, RadiusY, LineColor, FillColor, NumOfSegments, GroupID, Description)
            {
                /// <summary>Creates an ellipse in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="RadiusX" type="xxxxx">Description</param>
                /// <param name="RadiusY" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="NumOfSegments" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateFeatureLayer: function (layerName, sConnectionString, GroupID)
            {
                /// <summary>CreateFeatureLayer loads a feature layer into the project. A feature layer is a visual representation of a geographic data set like roads, national parks, political boundaries, and rivers using geographic objects such as points, lines, and polygons and optional corresponding annotation objects</summary>
                /// <param name="layerName" type="xxxxx">Description</param>
                /// <param name="sConnectionString" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateFromStream: function ()
            {
                /// <summary>xxxx</summary>
                /// <returns type="Undefined" />
            },
            CreateHoleOnTerrain: function (pIGeometry, GroupID, Description)
            {
                /// <summary>Creates a hole on terrain object in the 3D Window</summary>
                /// <param name="pIGeometry" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateImageLabel: function (Position, ImageFileName, LabelStyle, GroupID, Description)
            {
                /// <summary>Creates an image label in the 3D Window
                /// <para>Note: If no text is being added to the label, it is preferable to use this method rather than the generic CreateLabel method</para>
                /// </summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="ImageFileName" type="xxxxx">Description</param>
                /// <param name="LabelStyle" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateImageryLayer: function (ImageryFileName, UpperLeftX, UpperLeftY, LowerRightX, LowerRightY, InitParam, PlugName, GroupID, Description)
            {
                /// <summary>Loads an imagery layer into the project. Adding the image uses a set of plugins that support multiple file formats. The coordinates of the source can be passed via the UpperLeftX/Y and LowerRightX/Y parameters. If all four coordinate field values are zero, the coordinate information, if available, is read from the file. If the source file coordinate system is not the same as the MPT file Terrain Coordinate system, you can reproject it using ITerrainRasterLayer. CoordinateSystem.</summary>
                /// <param name="ImageryFileName" type="xxxxx">Description</param>
                /// <param name="UpperLeftX" type="xxxxx">Description</param>
                /// <param name="UpperLeftY" type="xxxxx">Description</param>
                /// <param name="LowerRightX" type="xxxxx">Description</param>
                /// <param name="LowerRightY" type="xxxxx">Description</param>
                /// <param name="InitParam" type="xxxxx">Description</param>
                /// <param name="PlugName" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateKMLLayer: function (Path, GroupID)
            {
                /// <summary>Loads a KML layer into the project. KML layers loaded into a project are always read directly from the local or remote data source. KML is an XML grammar and file format for modeling and storing geographic features such as points, lines, images and polygons. KML is an OGC standard that is publically defined. See: http://www.opengeospatial.org/standards/kml.</summary>
                /// <param name="Path" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateLabel: function (Position, Text, ImageFileName, LabelStyle, GroupID, Description)
            {
                /// <summary>Creates a label in the 3D Window. The method offers an optimization point in the LabelStyle parameter. The parameter allows the client to set all of the label’s style properties at the label creation time. When creating a large numbers of labels at once, the use of ILabelStyle avoids unnecessary round-trips between the client and TerraExplorer and therefore gains in performance</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Text" type="xxxxx">Description</param>
                /// <param name="ImageFileName" type="xxxxx">Description</param>
                /// <param name="LabelStyle" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateLabelStyle: function (LabelStyle)
            {
                /// <summary>Creates a text and image label style that defines all label style properties. This style can be applied to any ITerrainLabel or ITerrainImageLabel object</summary>
                /// <param name="LabelStyle" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateLocation: function (Position, GroupID, Description)
            {
                /// <summary>In TerraExplorer, a location is defined as a point of interest (X, Y, Height). The camera is given a direction and distance from which this point of interest is viewed. For example, if you chose the White House as your point of interest, you would need to find the x- and y-coordinates of the White House and pass those coordinates to the CreateLocation method</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateLocationHere: function (Group, Description)
            {
                /// <summary>Creates a location in the current camera position. A location defines the geographical coordinates of a point on the terrain as well as the position from which the point is to be viewed. By clicking on a location name in the Project Tree the camera can fly or jump to the location or play one of the predefined patterns (circle, oval, line or arc)</summary>
                /// <param name="Group" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateMeshLayerFromFile: function (FilePath, ParentGroupID)
            {
                /// <summary>Loads from a file an IMeshLayer representing a unified, stream optimized 3D Mesh Layer (3DML) database</summary>
                /// <param name="FilePath" type="xxxxx">Description</param>
                /// <param name="ParentGroupID" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateMeshLayerFromSFS: function (ServerPath, layerName, ParentGroupID)
            {
                /// <summary>Loads from TerraGate SFS an IMeshLayer representing a unified, stream optimized 3D Mesh Layer (3DML) database</summary>
                /// <param name="ServerPath" type="xxxxx">Description</param>
                /// <param name="layerName" type="xxxxx">Description</param>
                /// <param name="ParentGroupID" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateMessage: function (TargetPosition, msgData, Type, BringToFront)
            {
                /// <summary>Creates a message object that is displayed in a container or floating popup. The message can be a text string, HTML page, image, script code, multiple links or any other file</summary>
                /// <param name="TargetPosition" type="xxxxx">Description</param>
                /// <param name="msgData" type="xxxxx">Description</param>
                /// <param name="Type" type="xxxxx">Description</param>
                /// <param name="BringToFront" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateModel: function (Position, FileName, Scale, ModelType, GroupID, Description)
            {
                /// <summary>Loads an object from a file and places it in the 3D Window. Currently, TerraExplorer supports X and FLT formats (.x, .xpc, .flt, .fpc, .3ds, .xpl, .xpl2 or .dae)</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="FileName" type="xxxxx">Description</param>
                /// <param name="Scale" type="xxxxx">Description</param>
                /// <param name="ModelType" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateNewFeatureLayer: function (layerName, LayerGeomType, sConnectionString, GroupID)
            {
                /// <summary>The CreateNewFeatureLayer method enables you to create a new feature layer directly from TerraExplorer. The layer can be saved as a shapefile (.shp) or SQLite (.sqlite). For a shapefile, the connection string must include “TEPlugName=OGR” and “FileName=NameOfShapeFile.shp”. When saving as SQLite, the connection string must include “TEPlugName=OGR” and “FileName=NameOfSQLiteFile.sqlite” and “LayerName=newlayername”</summary>
                /// <param name="layerName" type="xxxxx">Description</param>
                /// <param name="LayerGeomType" type="xxxxx">Description</param>
                /// <param name="sConnectionString" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePointCloudModel: function (ModelFileName, Position, GroupID, Description)
            {
                /// <summary>Imports a Point Cloud object from a file and places it in the 3D Window. These models are created from a list of points in a 3D area that are collected by various 3D scanners. Currently, TerraExplorer supports Skyline’s proprietary Point Cloud files (CPT)</summary>
                /// <param name="ModelFileName" type="xxxxx">Description</param>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePolygon: function (Geometry, LineColor, FillColor, AltitudeType, GroupID, Description)
            {
                /// <summary>Create a polygon in the 3D Window
                /// <para>Note: To polygonize the resulting polygon (in order to find and resolve any intersecting lines) call StartEdit() followed by EndEdit()</para>
                /// </summary>
                /// <param name="Geometry" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="AltitudeType" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePolygonFromArray: function (verticesArray, LineColor, FillColor, AltitudeType, GroupID, Description)
            {
                /// <summary>Creates a polygon from an array of points
                /// <para>Note: To polygonize the resulting polygon (in order to find and resolve any intersecting lines) call StartEdit() followed by EndEdit()</para>
                /// </summary>
                /// <param name="verticesArray" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="AltitudeType" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePolyline: function (Geometry, LineColor, AltitudeType, GroupID, Description)
            {
                /// <summary>Creates a polyline in the 3D Window</summary>
                /// <param name="Geometry" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="AltitudeType" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePolylineFromArray: function (verticesArray, LineColor, AltitudeType, GroupID, Description)
            {
                /// <summary>Creates a polyline by connecting the points in an array of points</summary>
                /// <param name="verticesArray" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="AltitudeType" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePopupMessage: function (Caption, Src, Left, Top, Width, Height, Timeout)
            {
                /// <summary>Displays an HTML pop-up window that contains Microsoft Internet Explorer browser or simple text</summary>
                /// <param name="Caption" type="xxxxx">Description</param>
                /// <param name="Src" type="xxxxx">Description</param>
                /// <param name="Left" type="xxxxx">Description</param>
                /// <param name="Top" type="xxxxx">Description</param>
                /// <param name="Width" type="xxxxx">Description</param>
                /// <param name="Height" type="xxxxx">Description</param>
                /// <param name="Timeout" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePosition: function (X, Y, Altitude, AltitudeType, Yaw, Pitch, Roll, Distance)
            {
                /// <summary>Creates a position in the 3D Window with specific coordinate information (X, Y, Altitude), orientation properties (Yaw, Pitch, Roll) and distance from which to observe the point of interest</summary>
                /// <param name="X" type="xxxxx">Description</param>
                /// <param name="Y" type="xxxxx">Description</param>
                /// <param name="Altitude" type="xxxxx">Description</param>
                /// <param name="AltitudeType" type="xxxxx">Description</param>
                /// <param name="Yaw" type="xxxxx">Description</param>
                /// <param name="Pitch" type="xxxxx">Description</param>
                /// <param name="Roll" type="xxxxx">Description</param>
                /// <param name="Distance" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePresentation: function (GroupID, Description)
            {
                /// <summary>The CreatePresentation method enables you to create an empty presentation. You can then add the steps to the presentation and set caption and playback properties using the IPresentation interface</summary>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreatePyramid: function (Position, ObjectWidth, ObjectDepth, ObjectHeight, LineColor, FillColor, GroupID, Description)
            {
                /// <summary>Creates a pyramid in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="ObjectWidth" type="xxxxx">Description</param>
                /// <param name="ObjectDepth" type="xxxxx">Description</param>
                /// <param name="ObjectHeight" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateRectangle: function (Position, ObjectWidth, ObjectDepth, LineColor, FillColor, GroupID, Description)
            {
                /// <summary>Creates a rectangle in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="ObjectWidth" type="xxxxx">Description</param>
                /// <param name="ObjectDepth" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateRegularPolygon: function (Position, Radius, NumOfSegments, LineColor, FillColor, GroupID, Description)
            {
                /// <summary>Creates a polygon with equal-length segments in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Radius" type="xxxxx">Description</param>
                /// <param name="NumOfSegments" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateRouteWaypoint: function (X, Y, Altitude, Speed, Yaw, Pitch, Roll, CameraDeltaYaw, CameraDeltaPitch, MessageID)
            {
                /// <summary>You can generate a route for dynamic objects by creating a list of waypoints. Each waypoint defines the position of the camera and its speed at that waypoint. If you define a route using individual waypoints, TerraExplorer Pro generates the route by computing a line that passes through each location</summary>
                /// <param name="X" type="xxxxx">Description</param>
                /// <param name="Y" type="xxxxx">Description</param>
                /// <param name="Altitude" type="xxxxx">Description</param>
                /// <param name="Speed" type="xxxxx">Description</param>
                /// <param name="Yaw" type="xxxxx">Description</param>
                /// <param name="Pitch" type="xxxxx">Description</param>
                /// <param name="Roll" type="xxxxx">Description</param>
                /// <param name="CameraDeltaYaw" type="xxxxx">Description</param>
                /// <param name="CameraDeltaPitch" type="xxxxx">Description</param>
                /// <param name="MessageID" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateSphere: function (Position, Radius, Style, LineColor, FillColor, SegmentDensity, GroupID, Description)
            {
                /// <summary>Creates a sphere in the 3D Window</summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Radius" type="xxxxx">Description</param>
                /// <param name="Style" type="xxxxx">Description</param>
                /// <param name="LineColor" type="xxxxx">Description</param>
                /// <param name="FillColor" type="xxxxx">Description</param>
                /// <param name="SegmentDensity" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateTerrainModifier: function (pIGeometry, Mode, Flat, Feather, GroupID, Description)
            {
                /// <summary>A terrain modifier object is a unique polygon in the TerraExplorer world that changes the elevation values of the terrain based on a polygon</summary>
                /// <param name="pIGeometry" type="xxxxx">Description</param>
                /// <param name="Mode" type="xxxxx">Description</param>
                /// <param name="Flat" type="xxxxx">Description</param>
                /// <param name="Feather" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateTextLabel: function (Position, Text, LabelStyle, GroupID, Description)
            {
                /// <summary>Creates a text label in the 3D Window
                /// <para>Note: If you want to create an image label, use the CreateLabel or CreateImageLabel methods</para>
                /// </summary>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="Text" type="xxxxx">Description</param>
                /// <param name="LabelStyle" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateTreeHotlink: function (MessageID, GroupID, Description)
            {
                /// <summary>Creates a Project Tree entry that has only a hotlink that is not attached to a terrain object. In most cases, if an entry in the Project Tree is not a group, it usually represents an object on the terrain. It is, however, sometimes necessary to create an entry in the Project Tree that can be linked to a web page, for example, without the link actually being related to a terrain object. To create a Tree hotlink, you should first create a message object (using the CreateMessage method) and then pass the ID of that message object to the CreateTreeHotlink method</summary>
                /// <param name="name" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            CreateVideoOnTerrain: function (VideoFileName, Position, GroupID, Description)
            {
                /// <summary>Plays a movie draped on the terrain</summary>
                /// <param name="VideoFileName" type="xxxxx">Description</param>
                /// <param name="Position" type="xxxxx">Description</param>
                /// <param name="GroupID" type="xxxxx">Description</param>
                /// <param name="Description" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            DeleteObject: function (ObjectID)
            {
                /// <summary>Deletes an object from the terrain</summary>
                /// <param name="ObjectID" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            },
            GetObject: function (ObjectID)
            {
                /// <summary>Returns an interface to the object based on the object ID.</summary>
                /// <param name="ObjectID" type="xxxxx">Description</param>
                /// <returns type="Undefined" />
            }
        };
    }
    function IDateTime() {
        return {
            /// <field type="Date">Gets and sets the currently used global date and time</field>
            Current: new Date(),
            /// <field type="Number">Gets and sets the time range in seconds of the Date and Time slider</field>
            CurrentTimeBuffer: 0,
            /// <field type="Boolean">Gets and sets a Boolean that indicates whether the sun is used the sun as a light source</field>
            DisplaySun: true,
            /// <field type="Date">Gets and sets a fixed time at the viewer position. The time slider is set to this time and sunlight on the terrain corresponds to the position of the sun at this time on the current date</field>
            FixedLocalTime: new Date(),
            /// <field type="Date">Gets and sets the range end date and time</field>
            TimeRangeEnd: new Date(),
            /// <field type="Date">Gets and sets the range start date and time</field>
            TimeRangeStart: new Date(),
            /// <field type="String">Gets a description of the currently used time zone, e.g., "(GMT-09:00) Alaska". The string corresponds to the value of the OPTION node in the XML returned from TimeZonesXML.</field>
            TimeZoneDisplayName: '',
            /// <field type="String">Gets and sets a key of the used time zone, e.g., "Alaska Standard Time". The key can be one of the VALUE attributes of an OPTION node in the XML returned from TimeZonesXML</field>
            TimeZoneKey: '',
            /// <field type="TimeZoneType">Gets and sets the currently used time zone type</field>
            TimeZoneMode: {},
            /// <field type="String">Gets an XML that defines the available time zones in the operating system</field>
            TimeZonesXML: '',

            SetMode: function (Mode) {
                /// <summary>This method sets the time and date slider mode</summary>
                /// <param name="Mode" type="SliderDisplayMode">An enum that determines the date and time slider mode</param>
                /// <returns type="Undefined" />
            }
        };
    }
    function INavigate() {
        return {                
            /// <field type="Double">Gets and sets the camera field of view, in degrees. This number must be between 1° and 180°, where 1° is the maximum zoom in and 180° is the maximum zoom out. The default field of view is 53°</field>
            FieldOfView:{},
            /// <field type="Double">Gets and sets the speed at which the camera approaches an object</field>
            Speed: {},
            /// <field type="Boolean">Gets and sets a Boolean value that determines whether the underground mode is on or off. The underground navigation mode allows you to explore the subsurface of the terrain. A subsurface grid navigation aid appears when you navigate below the terrain, allowing you to navigate the same way as above ground</field>
            UndergroundMode: {},
            DetectCollisionToTarget: function (target)
            {
                /// <summary>Returns the distance to the first ground object detected on the path from the current camera position to the target parameter. The target parameter defines the direction and endpoint of this path.
                /// <para>If there is no collision between the viewer and target, 0 is returned</para></summary>
                /// <param name="target" type="IPosition">An IPosition representing the position of the endpoint of the path (that begins at the current camera position) that is being queried for the presence of a ground object</param>
                /// <returns type="Number" />
            },
            FlyTo: function (target, Pattern)
            {
                /// <signature>
                /// <summary>This method instructs the plane to fly to an object, approaching and focusing in on the object according to the value set in the Pattern parameter</summary>
                /// <param name="target" type="">The object to fly to. This parameter can be any of the following:
                /// <para>An object ID represented as a string.</para>
                /// <para>ITerraExplorerObject derived object</para>
                /// <para>ProjectTree GroupID</para>
                /// <para>IPosition object</para>
                /// </param>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>This method instructs the plane to fly to an object, approaching and focusing in on the object according to the value set in the Pattern parameter</summary>
                /// <param name="target" type="">The object to fly to. This parameter can be any of the following:
                /// <para>An object ID represented as a string.</para>
                /// <para>ITerraExplorerObject derived object</para>
                /// <para>ProjectTree GroupID</para>
                /// <para>IPosition object</para>
                /// </param>
                /// <param name="Pattern" type="ActionCode">An enum that instructs the plane on how to approach and focus in on the object</param>
                /// <returns type="Undefined" />
                /// </signature>
            },
            GetPosition: function (AltitudeType)
            {
                /// <signature>
                /// <summary>This method returns the camera’s position and orientation</summary>
                /// <returns type="IPosition" />
                /// </signature>
                /// <signature>
                /// <summary>This method returns the camera’s position and orientation</summary>
                /// <param name="AltitudeType" type="AltitudeTypeCode">An enum determining how the altitude is interpreted</param>
                /// <returns type="IPosition" />
                /// </signature>
            },
            JumpTo: function (target)
            {
                /// <summary>Instructs the camera to jump straight to the point of interest</summary>
                /// <param name="target" type="Object">The object to jump to. This parameter can be any of the following:
                /// <para>An object ID represented as a string.</para>
                /// <para>ITerraExplorerObject derived object</para>
                /// <para>ProjectTree GroupID</para>
                /// <para>IPosition object</para>
                /// </param>
                /// <returns type="Undefined" />
            },
            SetGPSMode: function (GPSMode)
            {
                /// <summary>Sets the GPS mode
                /// <para>Note: Before setting the mode to GPS_MODE_SHOW_LOCATION_INDICATOR or GPS_MODE_FOLLOW, the client should call SetGPSPosition to update the true GPS position</para>
                ///</summary>
                /// <param name="GPSMode" type="GPSOperationMode">An enum that can use any of the following values:</param>
                /// <returns type="Undefined" />
            },
            SetGPSPosition: function (Position)
            {
                /// <summary>Sets the GPS position</summary>
                /// <param name="Position" type="IPosition">An IPosition representing the position of the camera, defined by its coordinates in the 3D World</param>
                /// <returns type="Undefined" />
            },
            SetPosition: function (Position)
            {
                /// <summary>Sets the position of the camera in the 3D World</summary>
                /// <param name="Position" type="IPosition">An IPosition representing the position of the camera, defined by its coordinates in the 3D World</param>
                /// <returns type="Undefined" />
            },
            Stop:function(){
                /// <summary>Stops the camera movement</summary>
                /// <returns type="Undefined" />
            },
            ZoomIn: function (delta)
            {
                /// <signature>
                /// <summary>Moves the camera forward, closer to the point of interest</summary>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>Moves the camera forward, closer to the point of interest</summary>
                /// <param name="delta" type="Double">Distance to move forward</param>
                /// <returns type="Undefined" />
                /// </signature>
            },
            ZoomOut: function (delta)
            {
                /// <signature>
                /// <summary>Moves the camera backward, farther from the point of interest</summary>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>Moves the camera backward, farther from the point of interest</summary>
                /// <param name="delta" type="Double">Distance to move backward</param>
                /// <returns type="Undefined" />
                /// </signature>
            },
            ZoomTo: function (distanceFromPOI, Flags)
            {
                /// <signature>
                /// <summary>This method controls the zooming operation of the camera. The distanceFromPOI parameter specifies the distance from the ground at the center point of the 3D Window where the zoom operation stops</summary>
                /// <param name="distanceFromPOI" type="Double">The distance from the camera to the point on the terrain that the camera center is looking at</param>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>This method controls the zooming operation of the camera. The distanceFromPOI parameter specifies the distance from the ground at the center point of the 3D Window where the zoom operation stops</summary>
                /// <param name="distanceFromPOI" type="Double">The distance from the camera to the point on the terrain that the camera center is looking at</param>
                /// <param name="Flags" type="Number">Reserved. Always pass 0 (zero)</param>
                /// <returns type="Undefined" />
                /// </signature>
            }
        };
    }
    function IProject() {
        return {
            /// <field type="ITEVersionInfo">Returns an ITEVersionInfo representing the version of TerraExplorer currently running</field>
            FileVersion:0,
            /// <field type="String">Gets the name of the current loaded Fly file. If no Fly file is loaded, an empty string is returned</field>
            Name: 0,
            /// <field type="String">Allows defining the value of a specified parameter in the Fly file Project Settings. Each parameter is accessed by a unique identification string.
            /// <para>Use the ProjectSettingsDictionary type to request a certain key</para>
            ///</field>
            Settings: '',

            // Methods

            Close: function (bSuppressConfirmation) {
                /// <summary>Closes a Fly file or terrain database</summary>
                /// <param name="bSuppressConfirmation" type="Boolean">A Boolean that determines whether a dialog should display confirming the Close request</param>
                /// <returns type="Boolean" />
            },
            Open: function (ProjectURL, Asynchronous, User, Password) {
                /// <signature>
                /// <summary>Opens a Fly file or terrain database. Open passes the user name and password for the terrain database opened. In addition, Open can work in synchronous or asynchronous mode. In synchronous mode the method returns after the file is loaded. In asynchronous mode, the method returns immediately. You can then use ISGWorld.OnLoadFinished to be notified when the file is loaded</summary>
                /// <param name="ProjectURL" type="String">A full path name or a URL of a Fly file to be loaded by TerraExplorer. You can also load a local terrain database file by using a full path name to an MPT file, or a terrain database from TerraGate by following the format: “TerrainDatabase.Type@TerraGateAddress:PortNumber” (e.g., washington-dc.mpt@tgate.skylinesoft.com)</param>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>Opens a Fly file or terrain database. Open passes the user name and password for the terrain database opened. In addition, Open can work in synchronous or asynchronous mode. In synchronous mode the method returns after the file is loaded. In asynchronous mode, the method returns immediately. You can then use ISGWorld.OnLoadFinished to be notified when the file is loaded</summary>
                /// <param name="ProjectURL" type="String">A full path name or a URL of a Fly file to be loaded by TerraExplorer. You can also load a local terrain database file by using a full path name to an MPT file, or a terrain database from TerraGate by following the format: “TerrainDatabase.Type@TerraGateAddress:PortNumber” (e.g., washington-dc.mpt@tgate.skylinesoft.com)</param>
                /// <param name="Asynchronous" type="Boolean">When set to TRUE, the method executes asynchronously, meaning returns immediately. When set to FALSE, the method executes synchronously</param>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>Opens a Fly file or terrain database. Open passes the user name and password for the terrain database opened. In addition, Open can work in synchronous or asynchronous mode. In synchronous mode the method returns after the file is loaded. In asynchronous mode, the method returns immediately. You can then use ISGWorld.OnLoadFinished to be notified when the file is loaded</summary>
                /// <param name="ProjectURL" type="String">A full path name or a URL of a Fly file to be loaded by TerraExplorer. You can also load a local terrain database file by using a full path name to an MPT file, or a terrain database from TerraGate by following the format: “TerrainDatabase.Type@TerraGateAddress:PortNumber” (e.g., washington-dc.mpt@tgate.skylinesoft.com)</param>
                /// <param name="Asynchronous" type="Boolean">When set to TRUE, the method executes asynchronously, meaning returns immediately. When set to FALSE, the method executes synchronously</param>
                /// <param name="User" type="String">File’s security user name. If the file is not secure, the user name is ignored</param>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>Opens a Fly file or terrain database. Open passes the user name and password for the terrain database opened. In addition, Open can work in synchronous or asynchronous mode. In synchronous mode the method returns after the file is loaded. In asynchronous mode, the method returns immediately. You can then use ISGWorld.OnLoadFinished to be notified when the file is loaded</summary>
                /// <param name="ProjectURL" type="String">A full path name or a URL of a Fly file to be loaded by TerraExplorer. You can also load a local terrain database file by using a full path name to an MPT file, or a terrain database from TerraGate by following the format: “TerrainDatabase.Type@TerraGateAddress:PortNumber” (e.g., washington-dc.mpt@tgate.skylinesoft.com)</param>
                /// <param name="Asynchronous" type="Boolean">When set to TRUE, the method executes asynchronously, meaning returns immediately. When set to FALSE, the method executes synchronously</param>
                /// <param name="User" type="String">File’s security user name. If the file is not secure, the user name is ignored</param>
                /// <param name="Password" type="String">Security password for the specified user. If the file is not secure, the password is ignored</param>
                /// <returns type="Undefined" />
                /// </signature>
            },
            Save: function () {
                /// <summary>Saves the current project to a Fly file.
                /// <para>Note: The current project must be a Fly file. If the current file is an MPT, the method fails.</para>
                /// </summary>
                /// <returns type="Undefined" />
            },
            SaveAs: function (ProjectFileName) {
                /// <summary>Saves the current project to a Fly file with a specified name. For security reasons the file is saved to a predefined “Skyline\TerraExplorer” folder in the “Application Data” space of the current user. The full path of the saved file is provided in the method’s return value. You can also use %APPDATA% in Windows Explorer to locate the path on your computer.
                /// <para>Note: If the folder contains a file by the same name, the existing file is overwritten without a prompt.</para>
                /// <para>Note: The Application Data folder path changes between different users and different Windows operating systems. To find the path used by your client look at the %APPDATA% environment variable.</para>
                /// </summary>
                /// <param name="ProjectFileName" type="String">The name for the Fly file. If it is not specified, a FLY extension is added to the file name automatically.
                /// <para>Note: A file name with a full path cannot be used here.</para>
                /// </param>
                /// <returns type="String" />
            }
        };
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
    function ITEVersionInfo() {
        return {
            /// <field type="Number">Gets the third number in the version number</field>
            Build,
            /// <field type="Number">Gets the number in parenthesis in the version number. Fly files created by versions older than v6 will return -1 in the freeze number</field>
            Freeze,
            /// <field type="Number">Gets the first number in the version number</field>
            Major,
            /// <field type="Number">Gets the second number in the version number</field>
            Minor,
            /// <field type="VersionType">Gets the application in the TerraExplorer family that is being used: TerraExplorer Pro, TerraExplorer Plus or TerraExplorer Viewer</field>
            Type,

            toString:function(){
                /// <summary>Extension: 
                /// <para>Combines all the version numbers into a string</para>
                /// <para>Example: "6.1.3.1234"</para></summary>
                /// <returns type="String" />
            }
        };
    }
    function IWindow() {
        return {
            /// <field type="Boolean">Gets and sets a Boolean that determines whether TerraExplorer should hide the onscreen presentation controls when a presentation is played</field>
            DisablePresentationControl:false,
            /// <field type="IScreenRect">This interface returns the size and position of the 3D Window</field>
            Rect:{},
 
            //Methods

            CenterPixelToWorld: function (TypeFilterFlags) {
                /// <summary>Returns the real world coordinates on the terrain, behind the center pixel on the window</summary>
                /// <param name="TypeFilterFlags" type="String">Description</param>
                /// <returns type="IWorldPointInfo" />
            },
            GetControls: function () {
                /// <summary>Returns the currently shown navigation controls</summary>
                /// <returns type="controlFlags" />
            },
            GetInputMode: function () {
                /// <summary>Returns the current input mode of the mouse</summary>
                /// <returns type="MouseInputMode" />
            },
            GetMouseInfo: function () {
                /// <summary>Returns the mouse position and general mouse information</summary>
                /// <returns type="MouseInfo" />
            },
            GetPopupByCaption: function (PopupCaption) {
                /// <summary>Removes a popup with a specified caption. The popup is removed and not simply hidden from view</summary>
                /// <param name="PopupCaption" type="String">A string representing the caption of the popup that is to be removed</param>
                /// <returns type="String" />
            },
            GetSnapShot: function (toFile, Width, Height, Format, TerrainQuality) {
                /// <signature>
                /// <summary>Returns a snapshot of the window</summary>
                /// <param name="toFile" type="Boolean">A Boolean that indicates whether the snapshot should be saved to a file (TRUE) or whether a dialog window should be opened with the snapshot image</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Returns a snapshot of the window</summary>
                /// <param name="toFile" type="Boolean">A Boolean that indicates whether the snapshot should be saved to a file (TRUE) or whether a dialog window should be opened with the snapshot image</param>
                /// <param name="Width" type="Number">The width of the snapshot. If the width is not specified, the snapshot is created with the current 3D Window width</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Returns a snapshot of the window</summary>
                /// <param name="toFile" type="Boolean">A Boolean that indicates whether the snapshot should be saved to a file (TRUE) or whether a dialog window should be opened with the snapshot image</param>
                /// <param name="Width" type="Number">The width of the snapshot. If the width is not specified, the snapshot is created with the current 3D Window width</param>
                /// <param name="Height" type="Number">The height of the snapshot. If the height is not specified, the snapshot is created with the current 3D Window height</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Returns a snapshot of the window</summary>
                /// <param name="toFile" type="Boolean">A Boolean that indicates whether the snapshot should be saved to a file (TRUE) or whether a dialog window should be opened with the snapshot image</param>
                /// <param name="Width" type="Number">The width of the snapshot. If the width is not specified, the snapshot is created with the current 3D Window width</param>
                /// <param name="Height" type="Number">The height of the snapshot. If the height is not specified, the snapshot is created with the current 3D Window height</param>
                /// <param name="Format" type="String">A string defining the format and compression of the image file. Use ”BMP” for a windows bitmap file, or “JPeg75" for a 75% JPEG image</param>
                /// <returns type="String" />
                /// </signature>
                /// <signature>
                /// <summary>Returns a snapshot of the window</summary>
                /// <param name="toFile" type="Boolean">A Boolean that indicates whether the snapshot should be saved to a file (TRUE) or whether a dialog window should be opened with the snapshot image</param>
                /// <param name="Width" type="Number">The width of the snapshot. If the width is not specified, the snapshot is created with the current 3D Window width</param>
                /// <param name="Height" type="Number">The height of the snapshot. If the height is not specified, the snapshot is created with the current 3D Window height</param>
                /// <param name="Format" type="String">A string defining the format and compression of the image file. Use ”BMP” for a windows bitmap file, or “JPeg75" for a 75% JPEG image</param>
                /// <param name="TerrainQuality" type="TerrainQuality">Defines how to get the required terrain database resolution for every snapshot</param>
                /// <returns type="String" />
                /// </signature>
            },
            HideMessageBarText: function () {
                /// <summary>This method hides (but does not remove) the text message in the Message Bar container</summary>
                /// <returns type="Undefined" />
            },
            PixelFromWorld: function (Position, Mode) {
                /// <signature>
                /// <summary>This method returns an indication of whether a specified terrain coordinate is visible in the 3D Window. If it is visible, the screen coordinates of the specified pixel are returned</summary>
                /// <param name="Position" type="IPosition">The position of the specified coordinate, defined by its coordinates in the 3D World</param>
                /// <returns type="IScreenPointInfo" />
                /// </signature>
                /// <signature>
                /// <summary>This method returns an indication of whether a specified terrain coordinate is visible in the 3D Window. If it is visible, the screen coordinates of the specified pixel are returned</summary>
                /// <param name="Position" type="IPosition">The position of the specified coordinate, defined by its coordinates in the 3D World</param>
                /// <param name="Mode" type="PixelFromWorldMode">An enum that determines if the method takes obstructions into account in determining the visibility of the world point</param>
                /// <returns type="IScreenPointInfo" />
                /// </signature>
            },
            PixelToWorld: function (PixelX, PixelY, TypeFilterFlags) {
                /// <summary>Returns the real world coordinates on the terrain, behind a specified pixel on the window</summary>
                /// <param name="PixelX" type="Number">The left-right coordinate in pixels of a specified point on the window</param>
                /// <param name="PixelY" type="Number">The top-bottom coordinate in pixels of a specified point on the window</param>
                /// <param name="TypeFilterFlags" type="WorldPointType">Description</param>
                /// <returns type="IWorldPointInfo" />
            },
            RemovePopup: function (popup) {
                /// <summary>Specifies an instance of an IPopupMessage object up to be removed. The popup is removed and not simply hidden from view</summary>
                /// <param name="popup" type="IPopupMessage">An IPopupMessage representing the existing popup object that is to be removed</param>
                /// <returns type="Undefined" />
            },
            RemovePopupByCaption: function (PopupCaption) {
                /// <summary>Removes a popup with a specified caption. The popup is removed and not simply hidden from view</summary>
                /// <param name="PopupCaption" type="String">A string representing the caption of the popup that is to be removed</param>
                /// <returns type="Undefined" />
            },
            SetHUDLayer: function (pIStream, Index, MapMode) {
                /// <summary>This method displays a complete Head Up Display (HUD) in a graphic form. It accepts a serialized meta-DC that is saved into a stream, and draws it on top of the 3D Window</summary>
                /// <param name="pIStream" type="Object">Meta-DC saved as a stream. Passing Null clears the current HUD layer</param>
                /// <param name="Index" type="Number">Reserved. Currently not used. Should be set to zero</param>
                /// <param name="MapMode" type="Number">Reserved. Currently not used</param>
                /// <returns type="Undefined" />
            },
            SetInputMode: function (InputMode, cursorURL, AllowDrag) {
                /// <signature>
                /// <summary>This method determines the input mode of the mouse. Different input modes allow you to control the behavior of the mouse. For example, in free flight mode, clicking with the mouse on the various areas of the 3D Window, changes the camera’s yaw or tilt. This makes it hard to click a point on the terrain to place an object. Instead you can use the COM client mode that does not change the camera position</summary>
                /// <param name="InputMode" type="MouseInputMode">Set the Mouse Input mode</param>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>This method determines the input mode of the mouse. Different input modes allow you to control the behavior of the mouse. For example, in free flight mode, clicking with the mouse on the various areas of the 3D Window, changes the camera’s yaw or tilt. This makes it hard to click a point on the terrain to place an object. Instead you can use the COM client mode that does not change the camera position</summary>
                /// <param name="InputMode" type="MouseInputMode">Set the Mouse Input mode</param>
                /// <param name="cursorURL" type="String">If the input mode is MI_COM_CLIENT, this parameter can specify the URL of a cursor to be displayed on the 3D Window</param>
                /// <returns type="Undefined" />
                /// </signature>
                /// <signature>
                /// <summary>This method determines the input mode of the mouse. Different input modes allow you to control the behavior of the mouse. For example, in free flight mode, clicking with the mouse on the various areas of the 3D Window, changes the camera’s yaw or tilt. This makes it hard to click a point on the terrain to place an object. Instead you can use the COM client mode that does not change the camera position</summary>
                /// <param name="InputMode" type="MouseInputMode">Set the Mouse Input mode</param>
                /// <param name="cursorURL" type="String">If the input mode is MI_COM_CLIENT, this parameter can specify the URL of a cursor to be displayed on the 3D Window</param>
                /// <param name="AllowDrag" type="Boolean">This parameter indicates whether the 3D Window can be moved by dragging it to another position on the screen</param>
                /// <returns type="Undefined" />
                /// </signature>
            },
            ShowControls: function (controlFlags) {
                /// <summary>Shows navigation controls and/or graphical and textual information in the 3D Window</summary>
                /// <param name="controlFlags" type="controlFlags">The currently displayed navigation controls</param>
                /// <returns type="Undefined" />
            },
            ShowMessageBarText: function (Text, Alignment, Timeout) {
                /// <summary>This method displays the text message in the Message Bar container</summary>
                /// <param name="Text" type="String">The text string that is to be displayed in the message bar</param>
                /// <param name="Alignment" type="MessageBarTextAlignment">An enum determining the alignment of the message bar</param>
                /// <param name="Timeout" type="Number">Time in milliseconds, the message bar is displayed</param>
                /// <returns type="Undefined" />
            },
            ShowPopup: function (popup) {
                /// <summary>This method displays an HTML popup window that contains any text or HTML content</summary>
                /// <param name="popup" type="IPopupMessage">An IPopupMessage object representing the content and properties of the popup window</param>
                /// <returns type="Undefined" />
            }
        };
    }

    // All Other Interfaces

    function I3DMLFeatureLayer(){
        return{
        };
    }
    function I3DMLFeatureLayers() {
        return {
        };
    }
    function I3DMLFeatureProperties() {
        return {
        };
    }
    function I3DViewshed() {
        return {
        };
    }
    function IAction() {
        return {
        };
    }
    function IAttachment() {
        return {
        };
    }
    function IAttribute() {
        return {
        };
    }
    function IAttributes() {
        return {
        };
    }
    function IAviWriter() {
        return {
        };
    }
    function IBBox2D() {
        return {
        };
    }
    function IBBox3D() {
        return {
        };
    }
    function IBuildingFace() {
        return {
        };
    }
    function IBuildingSides() {
        return {
        };
    }
    function IClipboard() {
        return {
        };
    }
    function ICodecInfo() {
        return {
        };
    }
    function IColor() {
        return {
        };
    }
    function IContainerItem() {
        return {
        };
    }
    function IContainers() {
        return {
        };
    }
    function IContourMap() {
        return {
        };
    }
    function ICoord2D() {
        return {
        };
    }
    function ICoordinateSystem() {
        return {
        };
    }
    function IDataSourceInfo() {
        return {
        };
    }
    function IFeature() {
        return {
        };
    }
    function IFeatureAttribute() {
        return {
        };
    }
    function IFeatureAttributes() {
        return {
        };
    }
    function IFeatureGroup() {
        return {
        };
    }
    function IFeatureGroups() {
        return {
        };
    }
    function IFeatureLayer() {
        return {
        };
    }
    function IFeatures() {
        return {
        };
    }
    function IFillStyle() {
        return {
        };
    }
    function IGeometry() {
        return {
        };
    }
    function IGeometryCollection() {
        return {
        };
    }
    function IGeometryCreator() {
        return {
        };
    }
    function IKMLLayer() {
        return {
        };
    }
    function ILabelStyle() {
        return {
        };
    }
    function ILinearRing() {
        return {
        };
    }
    function ILineOfSight() {
        return {
        };
    }
    function ILineString() {
        return {
        };
    }
    function ILineStyle() {
        return {
        };
    }
    function IMeshLayer() {
        return {
        };
    }
    function IMessageObject() {
        return {
        };
    }
    function IMouseInfo() {
        return {
        };
    }
    function IMultiLineString() {
        return {
        };
    }
    function IMultiple3DWindows() {
        return {
        };
    }
    function IMultiPolygon() {
        return {
        };
    }
    function IObjectTexture() {
        return {
        };
    }
    function IPoint() {
        return {
        };
    }
    function IPointCloudDefaultLocation() {
        return {
        };
    }
    function IPoints() {
        return {
        };
    }
    function IPolygon() {
        return {
        };
    }
    function IPopupMessage() {
        return {
        };
    }
    function IPosition() {
        return {
            /// <field type="Double">Gets and sets the altitude of the IPosition66 object according to the Altitude Type value</field>
            Altitude: 0,
            /// <field type="AltitudeTypeCode">Gets and sets an enum determining how the altitude is interpreted</field>
            AltitudeType: 0,
            /// <field type="Boolean">Gets and sets a Boolean that determines whether calculations are based on a Cartesian coordinate system. When using a flat terrain database, the calculation is always based on a Cartesian system</field>
            Cartesian: true,
            /// <field type="Double">If the IPosition object is used to create a location object, the distance specifies a distance from which the x, y, and altitude coordinates must be viewed. If this property is set to -1, the recommended viewing distance for the object, based on its size, will be automatically calculated when needed (e.g. before Fly To operation)</field>
            Distance: 0,
            /// <field type="Double">Gets and sets the tilt angle</field>
            Pitch: 0,
            /// <field type="Double">Gets and sets the spin angle</field>
            Roll: 0,
            /// <field type="Double">Gets and sets the x-coordinate in the project’s coordinate system units</field>
            X: 0,
            /// <field type="Double">Gets and sets the y-coordinate in the project’s coordinate system units</field>
            Y: 0,
            /// <field type="Double">Gets and sets the yaw orientation of the object</field>
            Yaw: 0,

            // Methods

            AimTo: function (Position) {
                /// <summary>Returns an IPosition66 object that represents the same position as the caller’s coordinates and the angles that are directed toward the given coordinates</summary>
                /// <param name="Position" type="IPosition">An IPosition66 representing a position on the terrain</param>
                /// <returns type="IPosition" />
            },
            ChangeAltitudeType: function (AltitudeType) {
                /// <summary>Converts the altitude type of the caller to a new altitude type. The caller’s altitude is also changed as a result</summary>
                /// <param name="AltitudeType" type="AltitudeTypeCode">Description</param>
                /// <returns type="Undefined" />
            },
            Copy: function(){
                /// <summary>Returns an IPosition object that is a copy of the caller</summary>
                /// <returns type="IPosition" />
            },
            DistanceTo: function (Position) {
                /// <summary>Measures the distance between two coordinates</summary>
                /// <param name="Position" type="IPosition">An IPosition66 representing the coordinate whose distance from the caller’s coordinates is being measured</param>
                /// <returns type="Number" />
            },
            Init: function (X, Y, Altitude, Yaw, Pitch, Roll, AltitudeType, Distance) {
                /// <summary>Initializes a new instance of the IPosition</summary>
                /// <param name="X" type="Double">The x-coordinate in coordinate system units</param>
                /// <param name="Y" type="Double">The y-coordinate in coordinate system units</param>
                /// <param name="Altitude" type="Double">The altitude</param>
                /// <param name="Yaw" type="Double">The direction angle</param>
                /// <param name="Pitch" type="Double">The tilt angle</param>
                /// <param name="Roll" type="Double">The spin angle</param>
                /// <param name="AltitudeType" type="AltitudeTypeCode">An enum determining how the altitude is interpreted</param>
                /// <param name="Distance" type="Double">The distance to the camera once the camera comes to a stop</param>
                /// <returns type="Undefined" />
            },
            InitFrom: function(oVar){
                /// <summary>Initializes an IPosition object based on a string of comma separated position values in the following order: X/Longitude, Y/Latitude, Altitude, Yaw, Pitch, Roll, Distance, AltitudeType</summary>
                /// <param name="oVar" type="Object">A string of comma separated position values in the following order: X/Longitude, Y/Latitude, Altitude, Yaw, Pitch, Roll, Distance, AltitudeType</param>
                /// <returns type="Undefined" />
            },
            IsEqual: function (Position) {
                /// <summary>Compares the property values of this IPosition object to another IPosition66 object</summary>
                /// <param name="Position" type="IPosition">An IPosition66 representing a position, defined by its coordinates in the 3D World</param>
                /// <returns type="Boolean" />
            },
            Lerp: function (Position, Percentage) {
                /// <summary>Moves a coordinate a given percentage toward another coordinate</summary>
                /// <param name="Position" type="IPosition">An IPosition66 representing the coordinate towards which the selected coordinate is being moved</param>
                /// <param name="Percentage" type="Double">The percentage to move</param>
                /// <returns type="IPosition" />
            },
            Move: function (Distance, Yaw, Pitch) {
                /// <summary>Moves a coordinate a specific distance</summary>
                /// <param name="Distance" type="Double">The distance to move</param>
                /// <param name="Yaw" type="Double">The direction to move the coordinate</param>
                /// <param name="Pitch" type="Double">The pitch angle to move the coordinate</param>
                /// <returns type="IPosition" />
            },
            MoveToward: function (Position, Distance) {
                /// <summary>Moves a coordinate the specified distance toward another coordinate</summary>
                /// <param name="Position" type="IPosition">An IPosition66 representing the coordinate towards which the selected coordinate is being moved</param>
                /// <param name="Distance" type="Double">The distance to move</param>
                /// <returns type="IPosition" />
            },
            ToAbsolute: function (Accuracy) {
                /// <summary>Returns an IPosition object that is converted to absolute height (ATC_TERRAIN_ABSOLUTE)</summary>
                /// <param name="Accuracy" type="AccuracyLevel">An enum that determines the accuracy level</param>
                /// <returns type="IPosition" />
            },
            ToRelative: function (Accuracy) {
                /// <summary>Returns an IPosition object that is converted to height relative to terrain (ATC_TERRAIN_RELATIVE).</summary>
                /// <param name="Accuracy" type="AccuracyLevel">An enum that determines the accuracy level</param>
                /// <returns type="IPosition" />
            },
            ToString: function (Format) {
                /// <signature>
                /// <summary>Returns a string of comma separated position values in the following order: X/Longitude, Y/Latitude, Altitude, Yaw, Pitch, Roll, Distance, AltitudeType</summary>
                /// </signature>
                /// <signature>
                /// <summary>Returns a string of comma separated position values in the following order: X/Longitude, Y/Latitude, Altitude, Yaw, Pitch, Roll, Distance, AltitudeType</summary>
                /// <param name="Format" type="String"></param>
                /// </signature>
            }
        };
    }
    function IPresentation() {
        return {
        };
    }
    function IPresentationStep() {
        return {
        };
    }
    function IPresentationSteps() {
        return {
        };
    }
    function IRings() {
        return {
        };
    }
    function IRoofFace() {
        return {
        };
    }
    function IRouteWaypoint() {
        return {
        };
    }
    function IRouteWaypoints() {
        return {
        };
    }
    function IScreenRect() {
        return {
        };
    }
    function IScreenPointInfo() {
        return {
        };
    }
    function ISlopeMap() {
        return {
        };
    }
    function ISpatialOperator() {
        return {
        };
    }
    function ISpatialRelation() {
        return {
        };
    }
    function ITerraExplorerMessage() {
        return {
        };
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
    function ITerrain3DArrow() {
        return {
        };
    }
    function ITerrain3DPolygon() {
        return {
        };
    }
    function ITerrain3DRectBase() {
        return {
        };
    }
    function ITerrain3DRegBase() {
        return {
        };
    }
    function ITerrainArc() {
        return {
        };
    }
    function ITerrainArrow() {
        return {
        };
    }
    function ITerrainBuilding() {
        return {
        };
    }
    function ITerrainDynamicObject() {
        return {
        };
    }
    function ITerrainEffect() {
        return {
        };
    }
    function ITerrainEllipse() {
        return {
        };
    }
    function ITerrainHole() {
        return {
        };
    }
    function ITerrainImageLabel() {
        return {
        };
    }
    function ITerrainLabel() {
        return {
        };
    }
    function ITerrainLocation() {
        return {
        };
    }
    function ITerrainModel() {
        return {
        };
    }
    function ITerrainModifier() {
        return {
        };
    }
    function ITerrainObject() {
        return {
        };
    }
    function ITerrainPointCloudModel() {
        return {
        };
    }
    function ITerrainPolygon() {
        return {
        };
    }
    function ITerrainPolyline() {
        return {
        };
    }
    function ITerrainRasterLayer() {
        return {
        };
    }
    function ITerrainRectangle() {
        return {
        };
    }
    function ITerrainRegularPolygon() {
        return {
        };
    }
    function ITerrainSphere() {
        return {
        };
    }
    function ITerrainThreatDome() {
        return {
        };
    }
    function ITerrainVideo() {
        return {
        };
    }
    function ITimeSpan() {
        return {
        };
    }
    function ITooltip() {
        return {
        };
    }
    function ITreeHotlink() {
        return {
        };
    }
    function ITreeItem() {
        return {
        };
    }
    function IVisibility() {
        return {
        };
    }
    function IVolumeAnalysisInfo() {
        return {
        };
    }
    function IWks() {
        return {
        };
    }
    function IWorldPointInfo() {
        return {
        };
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