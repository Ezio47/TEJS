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

var AccuracyLevel = {
    'ACCURACY_NORMAL ': 0,
    'ACCURACY_BEST_FROM_MEMORY': 1,
    'ACCURACY_FORCE_BEST_RENDERED': 2
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

var MouseInputMode = {
    'MI_FREE_FLIGHT': 0,
    'MI_COM_CLIENT': 1,
    'MI_CONTROLLED_FLIGHT': 2,
    'MI_EDIT': 3,
    'MI_MEASUREMENT': 4
};

var TerrainQuality = {
    'USE_DATA_IN_MEMORY':0,
    'GET_BEST_RESOLUTION':1
};

var PixelFromWorldMode = {
    'PFW_IGNORE_Z_BUFFER': 0,
    'PFW_USE_Z_BUFFER': 1
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
    'HUD_LAYER_ZOOM_CONTROL': 256
};

var MessageBarTextAlignment = {
    'MBT_LEFT': 0,
    'MBT_CENTER': 1,
    'MBT_RIGHT': 2
};

var ViewshedQuality = {
    'VSQ_QUALITY_LOW': 0,
    'VSQ_QUALITY_MEDIUM': 1,
    'VSQ_QUALITY_HIGH': 2
};

var MultipleViewshedAnalysisType = {
    'MVT_VIEWSHED_ON_ROUTE': 0,
    'MVT_TIMESPAN_VIEWSHED_ON_ROUTE': 1,
    'MVT_CUMULATIVE_VIEWSHED_ON_ROUTE': 2
};

var SlopeDisplayStyle = {
    'CDS_SLOPE_STYLE_DEFAULT': -1,
    'CDS_SLOPE_STYLE_DIRECTION': 0,
    'CDS_SLOPE_STYLE_COLORS': 1,
    'CDS_SLOPE_STYLE_DIRECTION_AND_COLORS': 2
};

var ContourDisplayStyle = {
    'CDS_CONTOUR_STYLE_DEFAULT': -1,
    'CDS_CONTOUR_STYLE_LINES': 0,
    'CDS_CONTOUR_STYLE_COLORS': 1,
    'CDS_CONTOUR_STYLE_LINES_AND_COLORS': 2
};








