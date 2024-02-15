import FSS from './fss';
import { MESH, LIGHT, RENDER, WEBGL, CANVAS, SVG } from './configuration';
import { renderer } from './wall-renderers';


export default {
    width: 2000,
    height: 1000,
    drawLights: false,
    minLightX: 0.4,
    maxLightX: 0.6,
    minLightY: 0.2,
    maxLightY: 0.4,
    export: function() {
      var l, x, y, light,
          depth = MESH.depth,
          zOffset = LIGHT.zOffset,
          autopilot = LIGHT.autopilot,
          scalar = this.width / renderer.width;

      LIGHT.autopilot = true;
      LIGHT.draw = this.drawLights;
      LIGHT.zOffset *= scalar;
      MESH.depth *= scalar;

      resize(this.width, this.height);

      for (l = scene.lights.length - 1; l >= 0; l--) {
        light = scene.lights[l];
        x = Math.randomInRange(this.width*this.minLightX, this.width*this.maxLightX);
        y = Math.randomInRange(this.height*this.minLightY, this.height*this.maxLightY);
        FSS.Vector3.set(light.position, x, this.height-y, this.lightZ);
        FSS.Vector3.subtract(light.position, center);
      }

      update();
      render();

      switch(RENDER.renderer) {
        case WEBGL:
          window.open(webglRenderer.element.toDataURL(), '_blank');
          break;
        case CANVAS:
          window.open(canvasRenderer.element.toDataURL(), '_blank');
          break;
        case SVG:
          var data = encodeURIComponent(output.innerHTML);
          var url = "data:image/svg+xml," + data;
          window.open(url, '_blank');
          break;
      }

      LIGHT.draw = true;
      LIGHT.autopilot = autopilot;
      LIGHT.zOffset = zOffset;
      MESH.depth = depth;

      resize(container.offsetWidth, container.offsetHeight);
    }
  };
