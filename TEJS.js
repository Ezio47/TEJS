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