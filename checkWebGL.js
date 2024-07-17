function isWebGLAvailable() {
    try {
        var canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && 
                  (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
}

window.onload = function() {
    if (!isWebGLAvailable()) {
        console.warn('WebGL is not available on your browser. Attempting fallback...');
    }
    var unityContainer = document.getElementById('unityContainer');
    if (unityContainer) {
        try {
            var unityInstance = UnityLoader.instantiate("unityContainer", "Build/Build.json", { onProgress: UnityProgress });
        } catch (e) {
            console.error('Error instantiating UnityLoader:', e);
        }
    }
};
