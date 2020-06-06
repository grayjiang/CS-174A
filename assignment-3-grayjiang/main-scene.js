window.Assignment_Three_Scene = window.classes.Assignment_Three_Scene =
    class Assignment_Three_Scene extends Scene_Component
    { constructor( context, control_box )     // The scene begins by requesting the camera, shapes, and materials it will need.
    { super(   context, control_box );    // First, include a secondary Scene that provides movement controls:
      if( !context.globals.has_controls   )
        context.register_scene_component( new Movement_Controls( context, control_box.parentElement.insertCell() ) );

      context.globals.graphics_state.camera_transform = Mat4.look_at( Vec.of( 0,10,20 ), Vec.of( 0,0,0 ), Vec.of( 0,1,0 ) );
      this.initial_camera_location = Mat4.inverse( context.globals.graphics_state.camera_transform );
      const r = context.width/context.height;
      context.globals.graphics_state.projection_transform = Mat4.perspective( Math.PI/4, r, .1, 1000 );

      const shapes = { torus:  new Torus( 15, 15 ),
        torus2: new ( Torus.prototype.make_flat_shaded_version() )( 15, 15 ),

        // TODO:  Fill in as many additional shape instances as needed in this key/value table.
        //        (Requirement 1)
        sun_1: new (Subdivision_Sphere)(4),
        sun_2: new (Subdivision_Sphere.prototype.make_flat_shaded_version())(2),
        planet1: new (Subdivision_Sphere.prototype.make_flat_shaded_version())(2),
        planet2: new (Subdivision_Sphere)(3),
        planet3: new (Subdivision_Sphere)(4),
        planet4: new (Subdivision_Sphere)(4),
        moon: new (Subdivision_Sphere.prototype.make_flat_shaded_version())(1),
        gridSphere: new ( Grid_Sphere.prototype.make_flat_shaded_version()) (10, 10)

      }
      this.submit_shapes( context, shapes );

      // Make some Material objects available to you:
      this.materials =
          { test:     context.get_instance( Phong_Shader ).material( Color.of( 1,1,0,1 ), { ambient:.2 } ),
            ring:     context.get_instance( Ring_Shader  ).material(),


            // TODO:  Fill in as many additional material objects as needed in this key/value table.
            //        (Requirement 1)

            sun:      context.get_instance(Phong_Shader).material(Color.of(1, 0, 0, 1), { ambient: 1, diffusivity: .7, specular: 1., gouraud: true}),
            planet1: context.get_instance(Phong_Shader).material(Color.of(0.4, 0.54, 0.8, 1), { diffusivity: 1}),
            planet2_odd: context.get_instance(Phong_Shader).material(Color.of(0, 1, 0.7, 1), {diffusivity: .2, specular: 1, gouraud: true}),
            planet2_even: context.get_instance(Phong_Shader).material(Color.of(0, 1, 0.7, 1), {diffusivity: .2, specular: 1, gouraud: false}),
            planet3: context.get_instance(Phong_Shader).material(Color.of(0.4, 0.22, 0, 1), {diffusivity: 1, specular: 1}),
            planet4: context.get_instance(Phong_Shader).material(Color.of(0, 0.15, 0.8, 1), {specular: 1, smoothness:100}),
            moon: context.get_instance(Phong_Shader).material(Color.of(0, 0.45, 0, 1), {diffusivity: 0.5}),
            gridSphere: context.get_instance(Phong_Shader).material(Color.of(0.9, 0.9, 0.9, 1), {specular: 1}),
          }

      this.lights = [ new Light( Vec.of( 5,-10,5,1 ), Color.of( 0, 1, 1, 1 ), 1000 ) ];
      this.attached = () => this.initial_camera_location;

    }
      make_control_panel()            // Draw the scene's buttons, setup their actions and keyboard shortcuts, and monitor live measurements.
      { this.key_triggered_button( "View solar system",  [ "0" ], () => this.attached = () => this.initial_camera_location );
        this.new_line();
        this.key_triggered_button( "Attach to planet 1", [ "1" ], () => this.attached = () => this.planet_1 );
        this.key_triggered_button( "Attach to planet 2", [ "2" ], () => this.attached = () => this.planet_2 ); this.new_line();
        this.key_triggered_button( "Attach to planet 3", [ "3" ], () => this.attached = () => this.planet_3 );
        this.key_triggered_button( "Attach to planet 4", [ "4" ], () => this.attached = () => this.planet_4 ); this.new_line();
        this.key_triggered_button( "Attach to planet 5", [ "5" ], () => this.attached = () => this.planet_5 );
        this.key_triggered_button( "Attach to moon",     [ "m" ], () => this.attached = () => this.moon     );
      }
      display( graphics_state )
      {
        // graphics_state.lights = this.lights;        // Use the lights stored in this.lights.


        const t = graphics_state.animation_time / 1000, dt = graphics_state.animation_delta_time / 1000;
        // TODO:  Fill in matrix operations and drawing code to draw the solar system scene (Requirements 2 and 3)
        let n = 2 + Math.cos(0.4*Math.PI*t);
        graphics_state.lights = [new Light(Vec.of(0, 0, 0, 1), Color.of((n-1)/2, 0, (3-n)/2, 1), 10**n)];

        // TODO:  Draw the sun
        let transformation_sun = Mat4.identity();
        transformation_sun = transformation_sun.times(Mat4.scale([n, n, n]))
        this.shapes.sun_1.draw(graphics_state, transformation_sun, this.materials.sun.override({color:Color.of((n-1)/2,0,(3-n)/2,1)}));

        // TODO: Draw Planet 1
        let transformation_planet_1 = Mat4.identity();
        transformation_planet_1 = transformation_planet_1.times(Mat4.translation([5 * Math.sin(t+ Math.PI / 2), 0, 5 * Math.cos(t + Math.PI / 2)]));
        transformation_planet_1 = transformation_planet_1.times(Mat4.rotation(2 * t, Vec.of(0.4, 1, 0)));
        this.shapes.planet1.draw(graphics_state, transformation_planet_1, this.materials.planet1);

        // TODO: Draw Planet 2
        let transformation_planet_2 = Mat4.identity();
        transformation_planet_2 = transformation_planet_2.times(Mat4.translation([8 * Math.sin(0.9*t + Math.PI / 3), 0, 8 * Math.cos(0.9*t + Math.PI / 3)]));
        transformation_planet_2 = transformation_planet_2.times(Mat4.rotation(1.8 * t, Vec.of(0.4, 1, 0)));
        if(parseInt(t) % 2 == 0){
          this.shapes.planet2.draw(graphics_state, transformation_planet_2, this.materials.planet2_even);
        }else{
          this.shapes.planet2.draw(graphics_state, transformation_planet_2, this.materials.planet2_odd);
        }

        // TODO: Draw Planet 3
        let transformation_planet_3 = Mat4.identity();
        transformation_planet_3 = transformation_planet_3.times(Mat4.translation([11 * Math.sin(0.8*t + Math.PI / 4), 0, 11 * Math.cos(0.8*t + Math.PI / 4)]));
        transformation_planet_3 = transformation_planet_3.times(Mat4.rotation(1.6 * t, Vec.of(0.4, 1, 0)));
        this.shapes.planet3.draw(graphics_state, transformation_planet_3, this.materials.planet3);
        let transformation_planet_3_ring = transformation_planet_3.times(Mat4.scale([1, 1, 0.05]));
        this.shapes.torus.draw(graphics_state, transformation_planet_3_ring, this.materials.ring);

        // TODO: Draw Planet 4
        let transformation_planet_4 = Mat4.identity();
        transformation_planet_4 = transformation_planet_4.times(Mat4.translation([14 * Math.sin(0.7*t + Math.PI / 5), 0, 14 * Math.cos(0.7*t + Math.PI / 5)]));
        transformation_planet_4 = transformation_planet_4.times(Mat4.rotation(1.4 * t, Vec.of(0.4, 1, 0)));
        this.shapes.planet4.draw(graphics_state, transformation_planet_4, this.materials.planet4);

        let transformation_moon = transformation_planet_4.times(Mat4.translation([1.5 * Math.sin(t), 0, 1.5 * Math.cos(t)]));
        transformation_moon = transformation_moon.times(Mat4.rotation(t, Vec.of(0.4, 1, 0)));
        transformation_moon = transformation_moon.times(Mat4.scale([.7,.7,.7]));
        this.shapes.moon.draw(graphics_state, transformation_moon, this.materials.moon);


        // TODO: Draw Planet 4
        let transformation_planet_5 = Mat4.identity();
        transformation_planet_5 = transformation_planet_5.times(Mat4.translation([17 * Math.sin(0.6*t + Math.PI / 6), 0, 17 * Math.cos(0.6*t + Math.PI / 5)]));
        transformation_planet_5 = transformation_planet_5.times(Mat4.rotation(1.2 * t, Vec.of(0.4, 1, 0)));
        this.shapes.gridSphere.draw(graphics_state, transformation_planet_5, this.materials.gridSphere);

        // TODO: Change to the planet view
        this.planet_1 = transformation_planet_1;
        this.planet_2 = transformation_planet_2;
        this.planet_3 = transformation_planet_3;
        this.planet_4 = transformation_planet_4;
        this.moon = transformation_moon;
        this.planet_5 = transformation_planet_5;

        let camera_matrix = this.attached();
        if (camera_matrix === this.initial_camera_location) {
          graphics_state.camera_transform = Mat4.inverse(camera_matrix).map((x, i) => Vec.from(graphics_state.camera_transform[i]).mix(x, .1));

        }else{
          let camera_planet_transform = Mat4.translation([0,0,-5]).times((Mat4.inverse(camera_matrix)));
          graphics_state.camera_transform = camera_planet_transform.map((x, i) => Vec.from(graphics_state.camera_transform[i]).mix(x, .1));

        }


        // this.shapes.torus2.draw( graphics_state, Mat4.identity(), this.materials.test );

      }
    }


// Extra credit begins here (See TODO comments below):

window.Ring_Shader = window.classes.Ring_Shader =
    class Ring_Shader extends Shader              // Subclasses of Shader each store and manage a complete GPU program.
    { material() { return { shader: this } }      // Materials here are minimal, without any settings.
      map_attribute_name_to_buffer_name( name )       // The shader will pull single entries out of the vertex arrays, by their data fields'
      {                                             // names.  Map those names onto the arrays we'll pull them from.  This determines
        // which kinds of Shapes this Shader is compatible with.  Thanks to this function,
        // Vertex buffers in the GPU can get their pointers matched up with pointers to
        // attribute names in the GPU.  Shapes and Shaders can still be compatible even
        // if some vertex data feilds are unused.
        return { object_space_pos: "positions" }[ name ];      // Use a simple lookup table.
      }
      // Define how to synchronize our JavaScript's variables to the GPU's:
      update_GPU( g_state, model_transform, material, gpu = this.g_addrs, gl = this.gl )
      { const proj_camera = g_state.projection_transform.times( g_state.camera_transform );
        // Send our matrices to the shader programs:
        gl.uniformMatrix4fv( gpu.model_transform_loc,             false, Mat.flatten_2D_to_1D( model_transform.transposed() ) );
        gl.uniformMatrix4fv( gpu.projection_camera_transform_loc, false, Mat.flatten_2D_to_1D(     proj_camera.transposed() ) );
      }
      shared_glsl_code()            // ********* SHARED CODE, INCLUDED IN BOTH SHADERS *********
      { return `precision mediump float;
              varying vec4 position;
              varying vec4 center;
      `;
      }
      vertex_glsl_code()           // ********* VERTEX SHADER *********
      { return `
        attribute vec3 object_space_pos;
        uniform mat4 model_transform;
        uniform mat4 projection_camera_transform;

        void main()
        { 
          gl_Position = projection_camera_transform * model_transform * vec4(object_space_pos, 1.0);
          position = vec4(object_space_pos, 1.0);
          center = vec4(0.0, 0.0, 0.0, 1.0);                                                
        }`;           // TODO:  Complete the main function of the vertex shader (Extra Credit Part II).


      }
      fragment_glsl_code()           // ********* FRAGMENT SHADER *********
      { return `
        void main()
        { 
         if (distance(position, center) <= 2.3)
          {
            if (sin(28.0 * distance(position, center)) < -0.4){
              gl_FragColor = vec4(0.4, 0.22, 0, 1);
            }
          }        
        }`;           // TODO:  Complete the main function of the fragment shader (Extra Credit Part II).
      }
    }

window.Grid_Sphere = window.classes.Grid_Sphere =
    class Grid_Sphere extends Shape           // With lattitude / longitude divisions; this means singularities are at
    { constructor( rows, columns, texture_range )             // the mesh's top and bottom.  Subdivision_Sphere is a better alternative.
    { super( "positions", "normals", "texture_coords" );

      // TODO:  Complete the specification of a sphere with lattitude and longitude lines
      //        (Extra Credit Part III)
      const circle_points = Array( rows ).fill( Vec.of( 0,0,1 ) )
          .map( (p,i,a) => Mat4.rotation(i/(a.length-1) * Math.PI, Vec.of( 1,0,0 )).times(p.to4(1)).to3());
      Surface_Of_Revolution.insert_transformed_copy_into( this, [ rows, columns, circle_points ] );
    } }