function SGWorld(version) {

    var _globe, classId;
    var strGlobeName = 'globe';
    //param error checking
    (function () {
        if (version === '' || version === null)
            throw new Error('version cannot be blank');
    }());


    //Globe Settings
    (function () {
        
        switch (version) {
            case '6.5':
                classId = 'CLSID:3A4F9197-65A8-11D5-85C1-0001023952C1';
                break;
            case '6.6':
                classId = 'CLSID:3A4F9199-65A8-11D5-85C1-0001023952C1';
                break;
            default: //(6.6)
                classId = 'CLSID:3A4F9199-65A8-11D5-85C1-0001023952C1';
                break;
        }

        window[strGlobeName] = document.createElement('object');
        window[strGlobeName].id = strGlobeName;
        window[strGlobeName].classid = classId;
        window[strGlobeName].setAttribute('style', 'display:none;');
        document.body.appendChild(window[strGlobeName]);

    }());

    var ISGWorld = function () {};
    ISGWorld.prototype = window[strGlobeName];
    _globe = new ISGWorld();

    function globeInheritance(fieldName, func) {
        var f = (func === undefined) ? new Function() : func;
        f.prototype = _globe[fieldName];
        _globe[fieldName] = new f();
        return f;
    }

    var IAnalysis      = new globeInheritance('Analysis');
    var IApplication   = new globeInheritance('Application');
    var ICommand       = new globeInheritance('Command');
    var ICoordServices = new globeInheritance('CoordServices');
    var ICreator       = new globeInheritance('Creator');
    var IDateTime      = new globeInheritance('DateTime');
    var INavigate      = new globeInheritance('Navigate');
    var IProject       = new globeInheritance('Project');
    var IProjectTree   = new globeInheritance('ProjectTree');
    var ITerrain       = new globeInheritance('Terrain');
    var ITEVersionInfo = new globeInheritance('Version', function ITEVersionInfo() {
        this.toString = function () {
            return this.Major + '.' + this.Minor + '.' + this.Build + '.' + this.Freeze;
        };
    });
    var IWindow        = new globeInheritance('Window');


    return _globe;
}

var AccuracyLevel = {
    'ACCURACY_NORMAL ': 0,
    'ACCURACY_BEST_FROM_MEMORY': 1,
    'ACCURACY_FORCE_BEST_RENDERED': 2
};
var ActionCode = {
    /// <field type="Number">Fly to the object.</field>
    'AC_FLYTO': 0,
    /// <field type="Number">Perform a circle flight around the object.</field>
    'AC_CIRCLEPATTERN': 1,
    /// <field type="Number">Perform an oval flight pattern around the object.</field>
    'AC_OVALPATTERN': 2,
    /// <field type="Number">Perform a tight oval flight pattern around the object.</field>
    'AC_LINEPATTERN': 3,
    /// <field type="Number">Perform a vertical arc flight above the object.</field>
    'AC_ARCPATTERN': 4,
    /// <field type="Number">View the object from behind.</field>
    'AC_FOLLOWBEHIND': 5,
    /// <field type="Number">View the object from above.</field>
    'AC_FOLLOWABOVE': 6,
    /// <field type="Number">View the object from below.</field>
    'AC_FOLLOWBELOW': 7,
    /// <field type="Number">View the object from the right-hand side.</field>
    'AC_FOLLOWRIGHT': 8,
    /// <field type="Number">View the object from the left-hand side.</field>
    'AC_FOLLOWLEFT': 9,
    /// <field type="Number">View the object from behind and above (45 degrees).</field>
    'AC_FOLLOWBEHINDANDABOVE': 10,
    /// <field type="Number">View the world from the object’s pivot point.</field>
    'AC_FOLLOWCOCKPIT': 11,
    /// <field type="Number">View the object from the ground.</field>
    'AC_FOLLOWFROMGROUND': 12,
    /// <field type="Number">Stop the flight to an object.</field>
    'AC_STOP': 13,
    /// <field type="Number">Jump directly to the object.</field>
    'AC_JUMP': 14,
    /// <field type="Number">Play the object's activation action.</field>
    'AC_PLAY': 18
};
var AltitudeTypeCode = { 
    /// <field type="Number">Places the object’s pivot point at a specified altitude above the ground</field>
    'ATC_TERRAIN_RELATIVE' : 0, 
    /// <field type="Number">Places each point of the object at a specified altitude above the pivot point altitude, defined by its Point Altitude. The pivot is located at the center of the object</field>
    'ATC_PIVOT_RELATIVE': 1,
    /// <field type="Number">Creates the object on the terrain itself</field>
    'ATC_ON_TERRAIN': 2,
    /// <field type="Number">Places the object’s pivot point at a specified altitude above the terrain database vertical datum base ellipsoid</field>
    'ATC_TERRAIN_ABSOLUTE': 3,
    /// <field type="Number">Places the object's pivot point at a specified altitude above the 3DML layer</field>
    'ATC_3DML_RELATIVE': 4
};
var ContourDisplayStyle = {
    'CDS_CONTOUR_STYLE_DEFAULT': -1,
    'CDS_CONTOUR_STYLE_LINES': 0,
    'CDS_CONTOUR_STYLE_COLORS': 1,
    'CDS_CONTOUR_STYLE_LINES_AND_COLORS': 2
};
var controlFlags = {
    'HUD_LAYER_NONE': 0,
    'HUD_LAYER_ACTIVE_ARROWS': 1,
    'HUD_LAYER_CENTER_SIGN': 2,
    'HUD_LAYER_TEXT_DATA': 4,
    'HUD_LAYER_COMPASS': 8,
    'HUD_LAYER_GRAPHIC_1': 16,
    'HUD_LAYER_PAN_BARS': 32,
    'HUD_LAYER_DATE_TIME': 64,
    'HUD_LAYER_SCALE_BAR': 128,
    'HUD_LAYER_ZOOM_CONTROL' : 256
};
var ElevationBehaviorMode = {
    /// <field type="Number">Replaces the area defined by the polygon with the selected elevation value</field>
    'EB_REPLACE':0,
    /// <field type="Number">Replaces all elevation values that are lower than the selected elevation value with the selected elevation value</field>
    'EB_BELOW': 1,
    /// <field type="Number">Replaces all elevation values that are higher than the selected elevation value with the selected elevation value</field>
    'EB_ABOVE': 2
};
var GPSOperationMode = {
    /// <field type="Number">Turn GPS mode off.</field>
    'GPS_MODE_OFF': 0,
    /// <field type="Number">Indicate the current GPS location on the 3D Window (but don't follow the GPS position with the camera)</field>
    'GPS_MODE_SHOW_LOCATION_INDICATOR': 2,
    /// <field type="Number">Camera follows GPS position.</field>
    'GPS_MODE_FOLLOW': 4,
    /// <field type="Number">Internal use only. Client should not call SetGPSMode with this flag.</field>
    'GPS_MODE_NONE': 999

};
var MessageBarTextAlignment = {
    'MBT_LEFT': 0,
    'MBT_CENTER': 1,
    'MBT_RIGHT': 2
};
var MouseInputMode = {
    'MI_FREE_FLIGHT': 0,
    'MI_COM_CLIENT': 1,
    'MI_CONTROLLED_FLIGHT': 2,
    'MI_EDIT': 3,
    'MI_MEASUREMENT': 4
};
var MultipleViewshedAnalysisType = {
    'MVT_VIEWSHED_ON_ROUTE': 0,
    'MVT_TIMESPAN_VIEWSHED_ON_ROUTE': 1,
    'MVT_CUMULATIVE_VIEWSHED_ON_ROUTE': 2
};
var PixelFromWorldMode = {
    'PFW_IGNORE_Z_BUFFER': 0,
    'PFW_USE_Z_BUFFER': 1
};
var ProjectSettingsDictionary = {
    /// <field type="String">Determines whether all loaded models are automatically optimized by conversion to XPL2 upon loading</field>
    'GenerateLevelsOfDetailFor3DModels': 'GenerateLevelsOfDetailFor3DModels',
    /// <field type="String">Determines whether the faces of 3D models are rendered from two sides</field>
    'DoubleSidedRenderingOf3DModels': 'DoubleSidedRenderingOf3DModels',
    /// <field type="String">Determines whether the Skyline copyright text is removed. 1 – removed or 0 – displayed</field>
    'RemoveSkylineCopyright': 'RemoveSkylineCopyright',
    /// <field type="String">The color of the fog that covers the terrain in hexadecimal form: 0x00bbggrr</field>
    'FogColor': 'FogColor',
    /// <field type="String">The color of the sky in the hexadecimal form: 0x00bbggrr</field>
    'SkyColor': 'SkyColor',
    /// <field type="String">Distance to the horizon, in meters</field>
    'VisualRange': 'VisualRange',
    /// <field type="String">Distance, in meters, at which the fog starts</field>
    'FogStart ': 'FogStart ',
    /// <field type="String">Determines whether the sun is used as the light source. 1 – displayed or 0 – hidden</field>
    'DisplaySun': 'DisplaySun',
    /// <field type="String">Determines whether the currently used date and time value is defined in local time (1) or global date and time (0).
    /// <para>Note: Changes only take effect after saving and reopening the TerraExplorer project</para>
    ///</field>
    'SunAndMoonUseFixedLocalTime': 'SunAndMoonUseFixedLocalTime',
    /// <field type="String">Date (Javascript) or DateTime (C#) object that represents the currently used local time.
    /// <para>Note: Changes only take effect after saving and reopening the TerraExplorer project.</para>
    /// </field>
    'SunAndMoonFixedLocalTime': 'SunAndMoonFixedLocalTime',
    /// <field type="String">Date (Javascript) or DateTime (C#) object that represents the currently used global date and time.
    /// <para>Note: Changes only take effect after saving and reopening the TerraExplorer project</para>
    /// </field>
    'SunAndMoonTime': 'SunAndMoonTime',
    /// <field type="String">An XML string that defines the available time zones in the operating system.
    /// For example: <SELECT ID="TimeZoneList" SIZE="XX">
    /// <OPTION VALUE ="Alaska Standard Time">(GMT-09:00) Alaska<OPTION>
    /// ... </SELECT></field>
    'TimeZoneListXML': 'TimeZoneListXML',
    /// <field type="String">A string description of the currently used time zone, e.g., "(GMT-09:00) Alaska". The string corresponds to the value of the OPTION node in the XML returned from "TimeZoneListXML”</field>
    'SunAndMoonTimeZoneDisplayName': 'SunAndMoonTimeZoneDisplayName',
    /// <field type="String">A string key of the used time zone, e.g., "Alaska Standard Time". The key can be one of the VALUE attributes of an OPTION node in the XML returned from "TimeZoneListXML.</field>
    'SunAndMoonTimeZoneKey': 'SunAndMoonTimeZoneKey',
    /// <field type="String">Determines the minimum altitude allowed for the plane in meters or feet above ground level.</field>
    'AltitudeMinimumAltitude': 'AltitudeMinimumAltitude',
    /// <field type="String">Determines the altitude above the terrain database vertical datum base ellipsoid</field>
    'AltitudeUndergroundSurface': 'AltitudeUndergroundSurface',
    /// <field type="String">Determines the altitude above the terrain database vertical datum base ellipsoid</field>
    'AltitudeUndergroundSurface': 'AltitudeUndergroundSurface',
    /// <field type="String">Determines the navigation speed when using the keyboard controls and mouse</field>
    'KeyboardAndMouseNavigationSpeed': 'KeyboardAndMouseNavigationSpeed',
    /// <field type="String">Determines the joystick speed</field>
    'JoystickNavigationSpeed': 'JoystickNavigationSpeed'
};
var SlopeDisplayStyle = {
    'CDS_SLOPE_STYLE_DEFAULT': -1,
    'CDS_SLOPE_STYLE_DIRECTION': 0,
    'CDS_SLOPE_STYLE_COLORS': 1,
    'CDS_SLOPE_STYLE_DIRECTION_AND_COLORS': 2
};
var SliderDisplayMode = {
    /// <field type="String">Reserved</field>
    'MODE_TIME_NONE': 0,
    /// <field type="String">Always use a fixed time at the viewer position that can be set using the FixedLocalTime property</field>
    'MODE_FIXED_TIME': 1,
    /// <field type="String">Always use a fixed time that can be set using the IProject.Settings.property</field>
    'MODE_TIME': 2,
    /// <field type="String">Use range according to project</field>
    'MODE_RANGE_PROJECT': 4,
    /// <field type="String">Discontinued. Do not use</field>
    'MODE_RANGE_CUSTOM': 8,
    /// <field type="String">Automatically adjust range to selected group. You can use this flag in combination with the MODE_FIXED_TIME or MODE_TIME values</field>
    'MODE_ADJUST_FOR_GROUP': 16
};
var SphereStyle = {
    /// <field type="Number">The entire sphere is visible.</field>
    'SPHERE_NORMAL': 0,
    /// <field type="Number">The top half is visible.</field>
    'SPHERE_UPPER_HALF': 1,
    /// <field type="Number">The lower half is visible.</field>
    'SPHERE_LOWER_HALF': 2,
    /// <field type="Number">The upper half, with a base, is visible.</field>
    'SPHERE_ UPPER_HALF_BASE': 3,
    /// <field type="Number">The lower half, with a base, is visible.</field>
    'SPHERE_LOWER_HALF_BASE': 4
};
var TerrainQuality = {
    'USE_DATA_IN_MEMORY':0,
    'GET_BEST_RESOLUTION':1
};
var TimeZoneType = {
    'TIME_ZONE_TYPE_MY_COMPUTER' : 0,
    'TIME_ZONE_TYPE_UTC' : 1,
    'TIME_ZONE_TYPE_SPECIFIC' : 2
};
var ViewshedQuality = {
    'VSQ_QUALITY_LOW': 0,
    'VSQ_QUALITY_MEDIUM': 1,
    'VSQ_QUALITY_HIGH': 2
};
var WorldPointType = {
    'WPT_TERRAIN': 0,
    'WPT_MODEL': 1,
    'WPT_LABEL': 2,
    'WPT_PRIMITIVE': 4,
    'WPT_ANIM': 8,
    'WPT_BUILDING': 16,
    'WPT_SKY': 32,
    'WPT_ACCURATE_CPT': 64,
    'WPT_BBOX_CPT': 128,
    'WPT_VIDEO': 256,
    'WPT_UNDERGROUND': 512,
    'WPT_SCREEN_OVERLAY': 1024,
    'WPT_SCREEN_CONTROL': 2048,
    'WPT_SCREEN_COVERED': 4096,
    'WPT_3DML': 8192,
    'WPT_DEFAULT': -1
};
