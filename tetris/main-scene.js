class block_temp {
    constructor(num1, num2) {
        this.blank = new Array(4)
        for(let i = 0; i < 4; i++){
            this.blank[i] = new Array(4)
            for(let j = 0; j < 4; j++){
                this.blank[i][j] = 0
            }
        }
        this.index = num1; //to do rotation
        this.which = num2; //to determine what type of block
    }
    peak_next(){
        let temp = new Array(4)
        for(let i = 0; i < 4; i++){
            temp[i] = new Array(4)
            for(let j = 0; j < 4; j++){
                temp[i][j] = 0
            }
        }

        switch (this.which) {
            case 0:
                //I Block (SkyBlue) [f]
                console.log("I")
                switch (this.index) {
                    case 0:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[2][0] = 1;
                        this.index = 1;
                        break;
                    case 1:
                        temp[1][2] = 1;
                        temp[2][2] = 1;
                        temp[3][2] = 1;
                        temp[0][2] = 1;
                        this.index = 2;
                        break;
                    case 2:
                        temp[1][1] = 1;
                        temp[1][2] = 1;
                        temp[1][3] = 1;
                        temp[1][0] = 1;
                        this.index = 3;
                        break;
                    default:
                        temp[1][1] = 1;
                        temp[2][1] = 1;
                        temp[3][1] = 1;
                        temp[0][1] = 1;
                        this.index = 0;
                        break;
                }
                break;
            case 1:
                //L Block (Orange) [f]
                console.log("L")
                switch (this.index) {
                    case 0:
                        temp[3][3] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        this.index = 1;
                        break;
                    case 1:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        temp[1][3] = 1;
                        this.index = 2;
                        break;
                    case 2:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][1] = 1;
                        this.index = 3;
                        break;
                    default:
                        temp[3][1] = 1;
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        this.index = 0;
                        break;
                }
                break;
            case 2:
                // J Block (DarkBlue) [f]
                console.log("J")
                switch (this.index) {
                    case 0:
                        temp[3][1] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        this.index = 1;
                        break;
                    case 1:
                        temp[3][2] = 1;
                        temp[3][3] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        this.index = 2;
                        break;
                    case 2:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][3] = 1;
                        this.index = 3;
                        break;
                    default:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[1][1] = 1;
                        temp[1][2] = 1;
                        this.index = 0;
                        break;
                }
                break;
            case 3:
                // Z Block (Red) [f]
                console.log("Z")
                switch (this.index) {
                    case 0:
                        temp[3][1] = 1;
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        this.index = 1;
                        break;
                    case 1:
                        temp[3][3] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][2] = 1;
                        this.index = 2;
                        break;
                    case 2:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        temp[1][3] = 1;
                        this.index = 3;
                        break;
                    default:
                        temp[3][2] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[1][1] = 1;
                        this.index = 0;
                        break;
                }
                break;
            case 4:
                // S Block (Green) [f]
                console.log("S")
                switch(this.index) {
                    case 0:
                        temp[3][2] = 1;
                        temp[3][3] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        this.index = 1;
                        break;
                    case 1:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][3] = 1;
                        this.index = 2;
                        break;
                    case 2:
                        temp[2][3] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        temp[1][1] = 1;
                        this.index = 3;
                        break;
                    default:
                        temp[3][1] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        this.index = 0;
                        break;
                }
                break;
            case 5:
                // T Block (Purple) [f]
                console.log("T")
                switch (this.index) {
                    case 0:
                        temp[3][2] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        this.index = 1;
                        break;
                    case 1:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][2] = 1;
                        this.index = 2;
                        break;
                    case 2:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][2] = 1;
                        this.index = 3;
                        break;
                    default:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[2][1] = 1;
                        temp[1][2] = 1;
                        this.index = 0;
                        break;
                }
                break;
            default:
                //cube
                console.log("cube")
                temp[3][3] = 1;
                temp[3][2] = 1;
                temp[2][3] = 1;
                temp[2][2] = 1;
                break;
        }
        return temp
    }

    peak_nextl(){
        let temp = new Array(4)
        for(let i = 0; i < 4; i++){
            temp[i] = new Array(4)
            for(let j = 0; j < 4; j++){
                temp[i][j] = 0
            }
        }

        switch (this.which) {
            case 0:
                //I Block (SkyBlue) [f]
                console.log("I")
                switch (this.index) {
                    case 0:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[2][0] = 1;
                        this.index = 3;
                        break;
                    case 1:
                        temp[1][2] = 1;
                        temp[2][2] = 1;
                        temp[3][2] = 1;
                        temp[0][2] = 1;
                        this.index = 0;
                        break;
                    case 2:
                        temp[1][1] = 1;
                        temp[1][2] = 1;
                        temp[1][3] = 1;
                        temp[1][0] = 1;
                        this.index = 1;
                        break;
                    default:
                        temp[1][1] = 1;
                        temp[2][1] = 1;
                        temp[3][1] = 1;
                        temp[0][1] = 1;
                        this.index = 2;
                        break;
                }
                break;
            case 1:
                //L Block (Orange) [f]
                console.log("L")
                switch (this.index) {
                    case 0:
                        temp[3][3] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        this.index = 3;
                        break;
                    case 1:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        temp[1][3] = 1;
                        this.index = 0;
                        break;
                    case 2:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][1] = 1;
                        this.index = 1;
                        break;
                    default:
                        temp[3][1] = 1;
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        this.index = 2;
                        break;
                }
                break;
            case 2:
                // J Block (DarkBlue) [f]
                console.log("J")
                switch (this.index) {
                    case 0:
                        temp[3][1] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        this.index = 3;
                        break;
                    case 1:
                        temp[3][2] = 1;
                        temp[3][3] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        this.index = 0;
                        break;
                    case 2:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][3] = 1;
                        this.index = 1;
                        break;
                    default:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[1][1] = 1;
                        temp[1][2] = 1;
                        this.index = 2;
                        break;
                }
                break;
            case 3:
                // Z Block (Red) [f]
                console.log("Z")
                switch (this.index) {
                    case 0:
                        temp[3][1] = 1;
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        this.index = 3;
                        break;
                    case 1:
                        temp[3][3] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][2] = 1;
                        this.index = 0;
                        break;
                    case 2:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        temp[1][3] = 1;
                        this.index = 1;
                        break;
                    default:
                        temp[3][2] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[1][1] = 1;
                        this.index = 2;
                        break;
                }
                break;
            case 4:
                // S Block (Green) [f]
                console.log("S")
                switch(this.index) {
                    case 0:
                        temp[3][2] = 1;
                        temp[3][3] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        this.index = 3;
                        break;
                    case 1:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][3] = 1;
                        this.index = 0;
                        break;
                    case 2:
                        temp[2][3] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        temp[1][1] = 1;
                        this.index = 1;
                        break;
                    default:
                        temp[3][1] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[1][2] = 1;
                        this.index = 2;
                        break;
                }
                break;
            case 5:
                // T Block (Purple) [f]
                console.log("T")
                switch (this.index) {
                    case 0:
                        temp[3][2] = 1;
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        this.index = 3;
                        break;
                    case 1:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][2] = 1;
                        this.index = 0;
                        break;
                    case 2:
                        temp[2][1] = 1;
                        temp[2][2] = 1;
                        temp[2][3] = 1;
                        temp[1][2] = 1;
                        this.index = 1;
                        break;
                    default:
                        temp[3][2] = 1;
                        temp[2][2] = 1;
                        temp[2][1] = 1;
                        temp[1][2] = 1;
                        this.index = 2;
                        break;
                }
                break;
            default:
                //cube
                console.log("cube")
                temp[3][3] = 1;
                temp[3][2] = 1;
                temp[2][3] = 1;
                temp[2][2] = 1;
                break;
        }
        return temp
    }

    to_next(temp){
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                this.blank[i][j] = temp[i][j]
            }
        }
    }
}

window.Tetris = window.classes.Tetris =
    class Tetris extends Scene_Component {
        constructor(context, control_box)     // The scene begins by requesting the camera, shapes, and materials it will need.
        {
            super(context, control_box);    // First, include a secondary Scene that provides movement controls:
            if (!context.globals.has_controls)
                context.register_scene_component(new Movement_Controls(context, control_box.parentElement.insertCell()));

            // context.globals.graphics_state.camera_transform = Mat4.translation([-3, -5, -20]);  // Locate the camera here (inverted matrix).
            context.globals.graphics_state.camera_transform = Mat4.look_at(Vec.of(0, 0, -40), Vec.of(0, 0, 0), Vec.of(0, 1, 0));

            const r = context.width / context.height;
            context.globals.graphics_state.projection_transform = Mat4.perspective(Math.PI / 4, r, .1, 1000);

            this.do_shadow = true;

            this.width = 10;
            this.height = 20;

            this.core = new Array(this.height+3)
            for(let y = 0; y < 3; y++){
                this.core[y] = new Array( this.width+3)
                for(let x = 0; x < this.width+3; x++){
                    this.core[y][x] = 1
                }
            }

            for(let y = 3; y < this.height+3; y++){
                this.core[y] = new Array(this.width+3)
                for(let x = 0; x < 3; x++){
                    this.core[y][x] = 1
                }

                for(let z = 3; z < this.width+3; z++){
                    this.core[y][z] = 0
                }
            }

            this.block_point = new block_temp(0, 0);
            this.next_piece_index = Math.floor(Math.random() * 7);

            this.current_block = new Array(4)
            for(let i = 0; i < 4; i++){
                this.current_block[i] = new Array(4)
                for(let j = 0; j < 4; j++){
                    this.current_block[i][j] = 0
                }
            }
            this.next_block = new Array(4)
            for(let i = 0; i < 4; i++){
                this.next_block[i] = new Array(2)
                for(let j = 0; j < 2; j++){
                    this.next_block[i][j] = 0
                }
            }

            this.piece = 30;
            this.direction = new Array(this.piece)
            for(let y = 0; y < this.piece; y++){
                this.direction[y] = new Array(3)
                for(let x = 0; x < 3; x++){
                    this.direction[y][x] = Math.random()*2-1;
                }
            }

            this.positionx = 4;
            this.positiony = 19;
            this.anim_clock = 0;
            this.game_clock = 0;
            this.clean_start_line =0;
            this.num_of_lines =0;
            this.num_of_lines_cleared =0;
            this.init = true;
            this.speedup = false;

            const shapes = {
                sun: new (Subdivision_Sphere.prototype.make_flat_shaded_version())(4),
                small_unit: new Cube(),
                frame: new Cube(),
                background: new Cube(),

            };
            // shapes.frame.texture_coords = shapes.frame.texture_coords.map(v => Vec.of(v[0]*3, v[1]*14));

            this.submit_shapes(context, shapes);
            this.materials =
                {
                    sun: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/sun.png")
                        }
                    ),

                    moon: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/moon.png")
                        }
                    ),

                    shadow: context.get_instance(Phong_Shader).material(Color.of(0, 0, 0, 0.9), { ambient: 1}),
                    explorsion:   context.get_instance(Phong_Shader).material(Color.of(245/255,172/255,27/255,1), { ambient: 1}),
                    gray: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/gray.png")
                        }
                    ),

                    frame: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/frame.png")
                        }
                    ),

                    blue: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/blue.png")
                        }
                    ),

                    green: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/green.png")
                        }
                    ),

                    dark_blue: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/darkblue.png")
                        }
                    ),

                    orange: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/orange.png")
                        }
                    ),

                    purple: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/purple.png")
                        }
                    ),

                    red: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/red.png")
                        }
                    ),

                    yellow: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/yellow.png")
                        }
                    ),
                    background: context.get_instance(Texture_stay).material(
                        Color.of(0,0,0,1),
                        {
                            ambient: 1,
                            texture: context.get_instance("./assets/blue.jpeg")
                        }
                    ),


                };
            this.type = this.materials.gray
            this.lights = [new Light(Vec.of(-5, 5, 5, 1), Color.of(0, 1, 1, 1), 100000)];

        }

        check_line(){
            let clean = true
            for(let y = 3; y<this.height+3; y++){
                clean = true
                for(let x = 3; x< this.width +3; x++){
                    if(this.core[y][x] == 0){clean = false}
                }
                if(clean){
                    if(this.clean_start_line ==0) this.clean_start_line = y;
                    this.num_of_lines = this.num_of_lines+1;
                    this.num_of_lines_cleared = this.num_of_lines_cleared+1;
                    for(let j = 3; j < this.height+3; j++){
                        this.core[y][j] = 0
                    }
                }
            }
        }

        clean_line_anim(dt,graphics_state){
            if(this.clean_start_line == 0 && this.num_of_lines == 0){
                return
            }

            let init_pos = Mat4.identity().times(Mat4.translation([-1*(this.width/2)-3, -1*(this.height/2)-2, 0]));
            this.anim_clock = this.anim_clock + dt;
            let times = this.clean_start_line + this.num_of_lines;
            console.log(this.anim_clock)
            if(this.anim_clock<1.5){
                for(let k = this.clean_start_line; k < times; k++){
                    for(let j = 3; j < this.width+3; j++){
                        for(let i = 0; i< this.piece; i++){
                            let local_dir = init_pos.times(Mat4.translation([j,k,0]));
                            local_dir = local_dir.times(Mat4.translation([this.anim_clock*this.direction[i][0],this.anim_clock*this.direction[i][1],this.anim_clock*this.direction[i][2]]))
                            local_dir = local_dir.times(Mat4.scale([.1,.1,.1]));
                            local_dir = local_dir.times(Mat4.rotation(this.anim_clock*10,[this.direction[i][0],this.direction[i][1],this.direction[i][2]]));
                            this.shapes.small_unit.draw(graphics_state, local_dir, this.materials.explorsion);
                        }
                    }
                }
            }else{
                this.anim_clock = 0;
                for(let i = this.clean_start_line; i < this.height+3; i++){
                    for(let j = 3; j < this.height+3; j++){
                        if(this.num_of_lines + i < this.height+3){
                            this.core[i][j] = this.core[i+this.num_of_lines][j];
                            this.core[i+this.num_of_lines][j] = 0;
                        }
                        else{
                            this.core[i][j] = 0;
                        }
                    }
                }
                this.clean_start_line =0;
                this.num_of_lines = 0;
            }
        }

        create_block(num){
            //let num = Math.floor(Math.random() * 7);
            //let num2 = Math.floor(Math.random() * 7);
            switch (num) {
                case 0: this.type = this.materials.blue; break;
                case 1: this.type = this.materials.orange; break;
                case 2: this.type = this.materials.dark_blue; break;
                case 3: this.type = this.materials.red; break;
                case 4: this.type = this.materials.green; break;
                case 5: this.type = this.materials.purple; break;
                default: this.type = this.materials.yellow; break;
            }
            this.block_point = new block_temp(0, num);
            this.current_block = this.block_point.peak_next();
            this.block_point.to_next(this.current_block);
        }

        get_next_block(){
            this.next_piece_index = Math.floor(Math.random() * 7);
            for(let i = 0; i < 4; i++){
                for(let j = 0; j < 2; j++){
                    this.next_block[i][j] = 0
                }
            }
            switch(this.next_piece_index) {
                case 0:
                    for(let i = 0; i < 4; i++) {this.next_block[i][0] = 1}
                    break
                case 1:
                    for(let i = 0; i < 3; i++) {this.next_block[i][0] = 1}
                    this.next_block[2][1] = 1
                    break
                case 2:
                    for(let i = 0; i < 3; i++) {this.next_block[i][0] = 1}
                    this.next_block[0][1] = 1
                    break
                case 3:
                    for(let i = 0; i < 2; i++) {this.next_block[i][1] = 1; this.next_block[i+1][0] = 1}
                    break
                case 4:
                    for(let i = 0; i < 2; i++) {this.next_block[i][0] = 1; this.next_block[i+1][1] = 1}
                    break
                case 5:
                    for(let i = 0; i < 3; i++) {this.next_block[i][0] = 1}
                    this.next_block[1][1] = 1
                    break
                default:
                    for(let i = 0; i < 2; i++) {this.next_block[i][0] = 1; this.next_block[i][1] = 1}
                    break
            }
        }

        go_down(){
            if(this.check_collision(this.current_block,-1,0)){
                for(let y = 0; y < 4; y++){
                    for(let x = 0; x < 4; x++){
                        if(this.current_block[y][x] == 1){
                            this.core[this.positiony+y][this.positionx+x] = 1

                        }
                    }
                }

                for(let x = 3; x < this.height+3; x++){
                    if(this.core[this.height+2][x] == 1){
                        this.lose = true
                        let temp = "Game Over!\nYou've cleared " + this.num_of_lines_cleared.toString() + " lines!"
                        window.alert(temp)
                        return
                    }
                }

                this.create_block(this.next_piece_index);
                this.get_next_block();
                this.positionx = 4;
                this.positiony = 19;
            }else{
                this.positiony = this.positiony - 1;
            }
        }

        go_left(){
            this.check_action(1);
        }

        go_right(){
            this.check_action(-1);
        }

        do_rotation(){
            this.check_action(0);
        }

        do_rotation_l(){
            this.check_action(2);
        }

        check_action(key_press){
            if(key_press == 0){
                let block_rot = this.block_point.peak_next();
                if(this.check_collision(block_rot,0,0)){
                    return
                }else{
                    this.block_point.to_next(block_rot);
                    this.current_block = block_rot;
                }
            }
            else if (key_press == 2){
                let block_rot = this.block_point.peak_nextl();
                if(this.check_collision(block_rot,0,0)){
                    return
                }else{
                    this.block_point.to_next(block_rot);
                    this.current_block = block_rot;
                }
            }
            else{
                if(this.check_collision(this.current_block,0,key_press)){
                    return
                }else{
                    this.positionx = this.positionx + key_press
                }
            }
        }

        check_collision(block,down,left){
            for(let y = 0; y < 4; y++){
                for(let x = 0; x < 4; x++){
                    if(block[y][x] == 1){
                        if(this.positiony+y+down < 3){
                            return true
                        }
                        if(this.positionx+x+left < 3 || this.positionx+x+left > this.width+2){
                            return true
                        }

                        if(this.core[this.positiony+y+down][this.positionx+x+left] ==1){
                            return true
                        }
                    }
                }
            }
            return false
        }

        speed_up(){
            this.speedup = true;
        }
        slow_down(){
            this.speedup = false;
        }

        make_control_panel() { // TODO:  Implement requirement #5 using a key_triggered_button that responds to the 'c' key.
            this.key_triggered_button("rotate right", ["ArrowUp"], this.do_rotation); this.new_line();
            this.key_triggered_button("rotate left", ["x"], this.do_rotation_l); this.new_line();
            this.key_triggered_button("left", ["ArrowLeft"], this.go_left);
            this.key_triggered_button("right", ["ArrowRight"], this.go_right);
            this.key_triggered_button("down", ["ArrowDown"], this.speed_up, Color.of(1, 0, 0, 1), this.slow_down); this.new_line();
            this.key_triggered_button("restart", ["s"], this.restart);
        }

        draw_gmae_sense(graphics_state,theta){
            // draw frame
            let left_side = Mat4.identity().times(Mat4.translation([-5.625, 0.5, 0])); //-6, 0.5
            this.shapes.frame.draw(graphics_state, left_side.times(Mat4.scale([.125, 10.25, .5])), this.materials.frame);
            let right_side = Mat4.identity().times(Mat4.translation([4.625, .5, 0]));
            this.shapes.frame.draw(graphics_state, right_side.times(Mat4.scale([.125, 10.25, .5])), this.materials.frame);

            let up = Mat4.identity().times(Mat4.translation([-0.5, 10.625, 0]));
            up = up.times(Mat4.rotation(Math.PI/2, [0,0,1]))
            this.shapes.frame.draw(graphics_state, up.times(Mat4.scale([.125, 5, .5])), this.materials.frame);
            let down = Mat4.identity().times(Mat4.translation([-0.5, -9.625, 0]));
            down = down.times(Mat4.rotation(Math.PI/2, [0,0,1]))
            this.shapes.frame.draw(graphics_state, down.times(Mat4.scale([.125, 5, .5])), this.materials.frame);

            //draw background block
            let init_pos = Mat4.identity().times(Mat4.translation([-1*(this.width/2)-3, -1*(this.height/2)-2, 0]));
            for(let y = 3; y < this.height+3; y++){
                for(let x = 3; x < this.height+3; x++){
                    if(this.core[y][x] == 1){
                        let pos = init_pos.times(Mat4.translation([x, y, 0]));
                        pos = pos.times(Mat4.scale([.5,.5,.5]));
                        this.shapes.small_unit.draw(graphics_state, pos, this.materials.gray);
                        if(this.do_shadow){
                            pos = pos.times(Mat4.translation([-Math.abs(Math.sin(theta)),-Math.abs(Math.cos(theta))-0.3,3]))
                            pos = pos.times(Mat4.scale([1,1,0]));
                            this.shapes.small_unit.draw(graphics_state, pos, this.materials.shadow);
                        }

                    }
                }
            }

            // draw current block
            let current_pos = init_pos.times(Mat4.translation([this.positionx, this.positiony, 0]))
            for(let i = 0; i < 4; i++){
                for(let j= 0; j < 4; j++){
                    if(this.current_block[i][j] == 1){
                        let each_pos = current_pos.times(Mat4.translation([j, i, 0]));
                        each_pos = each_pos.times(Mat4.scale([.5,.5,.5]));
                        this.shapes.small_unit.draw(graphics_state, each_pos, this.type);
                        if(this.do_shadow){
                            each_pos = each_pos.times(Mat4.translation([-Math.abs(Math.sin(theta)),-Math.abs(Math.cos(theta))-0.3,3]))
                            each_pos = each_pos.times(Mat4.scale([1,1,0]));
                            this.shapes.small_unit.draw(graphics_state, each_pos, this.materials.shadow);
                        }
                    }
                }
            }

            // draw frame 2
            let left_side_2 = Mat4.identity().times(Mat4.translation([-6.625, 9, 0])); //-6, 0.5
            this.shapes.frame.draw(graphics_state, left_side_2.times(Mat4.scale([.125, 1.75, .5])), this.materials.frame);
            let right_side_2 = Mat4.identity().times(Mat4.translation([-11.625, 9, 0]));
            this.shapes.frame.draw(graphics_state, right_side_2.times(Mat4.scale([.125, 1.75, .5])), this.materials.frame);

            let up_2 = Mat4.identity().times(Mat4.translation([-9.125, 10.625, 0]));
            up_2 = up_2.times(Mat4.rotation(Math.PI/2, [0,0,1]))
            this.shapes.frame.draw(graphics_state, up_2.times(Mat4.scale([.125, 2.375, .5])), this.materials.frame);

            let down_2 = Mat4.identity().times(Mat4.translation([-9.125, 7.375, 0]));
            down_2 = down_2.times(Mat4.rotation(Math.PI/2, [0,0,1]))
            this.shapes.frame.draw(graphics_state, down_2.times(Mat4.scale([.125, 2.375, .5])), this.materials.frame);

            // draw title
            {
                let left_side_3_c = Mat4.identity().times(Mat4.translation([5.625, -8.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_3_c.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);
                let left_side_d_c = Mat4.identity().times(Mat4.translation([5.625, -5.75, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_d_c.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);
                let left_side_e_c = Mat4.identity().times(Mat4.translation([5.625, 0.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_e_c.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);
                let left_side_i_c = Mat4.identity().times(Mat4.translation([5.625, 7.75, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_i_c.times(Mat4.scale([.125, 0.25, .5])), this.materials.frame);
                let left_side_s_c = Mat4.identity().times(Mat4.translation([5.625, 9.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_s_c.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);

                let left_side_3_b = Mat4.identity().times(Mat4.translation([6.625, -8.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_3_b.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);
                let left_side_e_b = Mat4.identity().times(Mat4.translation([6.625, 0.25, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_e_b.times(Mat4.scale([.125, 1, .5])), this.materials.frame);
                let left_side_r_b = Mat4.identity().times(Mat4.translation([6.625, 6, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_r_b.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);
                let left_side_s_b = Mat4.identity().times(Mat4.translation([6.625, 9.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_s_b.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);

                let left_side_3_a = Mat4.identity().times(Mat4.translation([7.625, -8.75, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_3_a.times(Mat4.scale([.125, 1, .5])), this.materials.frame);
                let left_side_d_a = Mat4.identity().times(Mat4.translation([7.625, -6, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_d_a.times(Mat4.scale([.125, 1, .5])), this.materials.frame);
                let left_side_t_a = Mat4.identity().times(Mat4.translation([7.625, -2.25, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_t_a.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);
                let left_side_e_a = Mat4.identity().times(Mat4.translation([7.625, 0.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_e_a.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);
                let left_side_t2_a = Mat4.identity().times(Mat4.translation([7.625, 3.25, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_t2_a.times(Mat4.scale([.125, 1.25, .5])), this.materials.frame);
                let left_side_r_a = Mat4.identity().times(Mat4.translation([7.625, 5.75, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_r_a.times(Mat4.scale([.125, 1, .5])), this.materials.frame);
                let left_side_i_a = Mat4.identity().times(Mat4.translation([7.625, 7.75, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_i_a.times(Mat4.scale([.125, 0.25, .5])), this.materials.frame);
                let left_side_s_a = Mat4.identity().times(Mat4.translation([7.625, 9.25, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_s_a.times(Mat4.scale([.125, 1, .5])), this.materials.frame);

                let left_side_3_1 = Mat4.identity().times(Mat4.translation([6.125, -7.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_3_1.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);
                let left_side_3_2 = Mat4.identity().times(Mat4.translation([7.125, -8, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_3_2.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);

                let left_side_d_1 = Mat4.identity().times(Mat4.translation([6.125, -4.75, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_d_1.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);
                let left_side_d_2 = Mat4.identity().times(Mat4.translation([7.125, -5.25, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_d_2.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);

                let left_side_r_1 = Mat4.identity().times(Mat4.translation([6, 7, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_r_1.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);
                let left_side_r_2 = Mat4.identity().times(Mat4.translation([7.125, 6.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_r_2.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);
                let left_side_r_3 = Mat4.identity().times(Mat4.translation([6, 4.875, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_r_3.times(Mat4.scale([0.5, 0.125, .5])), this.materials.frame);
                let left_side_r_4 = Mat4.identity().times(Mat4.translation([7.125, 4.875, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_r_4.times(Mat4.scale([0.5, 0.125, .5])), this.materials.frame);

                let left_side_s_1 = Mat4.identity().times(Mat4.translation([6, 10.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_s_1.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);
                let left_side_s_4 = Mat4.identity().times(Mat4.translation([7.125, 8.375, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_s_4.times(Mat4.scale([0.5, 0.125, .5])), this.materials.frame);

                let left_side_e_1 = Mat4.identity().times(Mat4.translation([6, -0.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_e_1.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);
                let left_side_e_2 = Mat4.identity().times(Mat4.translation([7, -0.5, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_e_2.times(Mat4.scale([0.5, 0.25, .5])), this.materials.frame);

                let left_side_d_s = Mat4.identity().times(Mat4.translation([6.5, -6.875, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_d_s.times(Mat4.scale([1, 0.125, .5])), this.materials.frame);
                let left_side_t_s = Mat4.identity().times(Mat4.translation([6.5, -2.25, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_t_s.times(Mat4.scale([1, 0.25, .5])), this.materials.frame);
                let left_side_t2_s = Mat4.identity().times(Mat4.translation([6.5, 3.25, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_t2_s.times(Mat4.scale([1, 0.25, .5])), this.materials.frame);
                let left_side_i_s = Mat4.identity().times(Mat4.translation([6.5, 7.75, 0])); //3
                this.shapes.frame.draw(graphics_state, left_side_i_s.times(Mat4.scale([1, 0.125, .5])), this.materials.frame);
            }

            // draw frame 3
            let left_side_3 = Mat4.identity().times(Mat4.translation([-6.625, -8, 0])); //-6, 0.5
            this.shapes.frame.draw(graphics_state, left_side_3.times(Mat4.scale([.125, 1.75, .5])), this.materials.frame);
            let right_side_3 = Mat4.identity().times(Mat4.translation([-11.625, -8, 0]));
            this.shapes.frame.draw(graphics_state, right_side_3.times(Mat4.scale([.125, 1.75, .5])), this.materials.frame);

            let up_3 = Mat4.identity().times(Mat4.translation([-9.125, -9.625, 0]));
            up_3 = up_3.times(Mat4.rotation(Math.PI / 2, [0, 0, 1]))
            this.shapes.frame.draw(graphics_state, up_3.times(Mat4.scale([.125, 2.375, .5])), this.materials.frame);

            let down_3 = Mat4.identity().times(Mat4.translation([-9.125, -6.375, 0]));
            down_3 = down_3.times(Mat4.rotation(Math.PI / 2, [0, 0, 1]))
            this.shapes.frame.draw(graphics_state, down_3.times(Mat4.scale([.125, 2.375, .5])), this.materials.frame);

            if (this.num_of_lines_cleared > 0 && this.num_of_lines_cleared < 17) {
                for (let i = 0; (i < this.num_of_lines_cleared && i < 4); i ++){
                    let temp = Mat4.identity().times(Mat4.translation([-7.625, (-8.75 + i* 0.5), 0])); //-6, 0.5
                    this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.green);
                }
                if (this.num_of_lines_cleared > 4) {
                    for (let i = 0; (i < this.num_of_lines_cleared - 4 && i < 4); i ++){
                        let temp = Mat4.identity().times(Mat4.translation([-8.625, (-8.75 + i* 0.5), 0])); //-6, 0.5
                        this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.blue);
                    }
                    if (this.num_of_lines_cleared > 8) {
                        for (let i = 0; (i < this.num_of_lines_cleared - 8 && i < 4); i++) {
                            let temp = Mat4.identity().times(Mat4.translation([-9.625, (-8.75 + i * 0.5), 0])); //-6, 0.5
                            this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.dark_blue);
                        }
                        if (this.num_of_lines_cleared > 12) {
                            for (let i = 0; (i < this.num_of_lines_cleared - 12 && i < 4); i++) {
                                let temp = Mat4.identity().times(Mat4.translation([-10.625, (-8.75 + i * 0.5), 0])); //-6, 0.5
                                this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.purple);
                            }
                        }
                    }
                }
            }
            else if (this.num_of_lines_cleared > 16 && this.num_of_lines_cleared < 33){
                let a = this.num_of_lines_cleared - 16;
                for (let i = 0; (i < a && i < 4); i ++){
                    let temp = Mat4.identity().times(Mat4.translation([-7.625, (-8.75 + i* 0.5), 0])); //-6, 0.5
                    this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.red);
                }
                if (a > 4) {
                    for (let i = 0; (i < a - 4 && i < 4); i ++){
                        let temp = Mat4.identity().times(Mat4.translation([-8.625, (-8.75 + i* 0.5), 0])); //-6, 0.5
                        this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.orange);
                    }
                    if (a > 8) {
                        for (let i = 0; (i < a - 8 && i < 4); i++) {
                            let temp = Mat4.identity().times(Mat4.translation([-9.625, (-8.75 + i * 0.5), 0])); //-6, 0.5
                            this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.yellow);
                        }
                        if (a > 12) {
                            for (let i = 0; (i < a - 12 && i < 4); i++) {
                                let temp = Mat4.identity().times(Mat4.translation([-10.625, (-8.75 + i * 0.5), 0])); //-6, 0.5
                                this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.gray);
                            }
                        }
                    }
                }
            }
            else if (this.num_of_lines_cleared > 32 && this.num_of_lines_cleared < 49){
                let a = this.num_of_lines_cleared - 32;
                for (let i = 0; (i < a && i < 4); i ++){
                    let temp = Mat4.identity().times(Mat4.translation([-7.625, (-8.75 + i* 0.5), 0])); //-6, 0.5
                    this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.gray);
                }
                if (a > 4) {
                    for (let i = 0; (i < a - 4 && i < 4); i ++){
                        let temp = Mat4.identity().times(Mat4.translation([-8.625, (-8.75 + i* 0.5), 0])); //-6, 0.5
                        this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.gray);
                    }
                    if (a > 8) {
                        for (let i = 0; (i < a - 8 && i < 4); i++) {
                            let temp = Mat4.identity().times(Mat4.translation([-9.625, (-8.75 + i * 0.5), 0])); //-6, 0.5
                            this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.gray);
                        }
                        if (a > 12) {
                            for (let i = 0; (i < a - 12 && i < 4); i++) {
                                let temp = Mat4.identity().times(Mat4.translation([-10.625, (-8.75 + i * 0.5), 0])); //-6, 0.5
                                this.shapes.frame.draw(graphics_state, temp.times(Mat4.scale([0.5, 0.25, .5])), this.materials.gray);
                            }
                        }
                    }
                }
            }

            // draw next block
            let next_type = this.materials.gray;
            switch (this.next_piece_index) {
                case 0: next_type = this.materials.blue; break;
                case 1: next_type = this.materials.orange; break;
                case 2: next_type = this.materials.dark_blue; break;
                case 3: next_type = this.materials.red; break;
                case 4: next_type = this.materials.green; break;
                case 5: next_type = this.materials.purple; break;
                default: next_type = this.materials.yellow; break;
            }
            for(let i = 0; i < 4; i++){
                for(let j= 0; j < 2; j++){
                    if(this.next_block[i][j] == 1){
                        let each_pos = init_pos.times(Mat4.translation([i - 2, j + 20.5, 0]));
                        if(this.next_block[3][0] == 1)
                            each_pos = init_pos.times(Mat4.translation([i - 2.5, j + 21, 0]));
                        each_pos = each_pos.times(Mat4.scale([.5,.5,.5]));
                        this.shapes.small_unit.draw(graphics_state, each_pos, next_type);
                        if(this.do_shadow){
                            each_pos = each_pos.times(Mat4.translation([-Math.abs(Math.sin(theta)),-Math.abs(Math.cos(theta))-0.3,3]))
                            each_pos = each_pos.times(Mat4.scale([1,1,0]));
                            this.shapes.small_unit.draw(graphics_state, each_pos, this.materials.shadow);
                        }
                    }
                }
            }

            //camera transform
            const t = graphics_state.animation_time / 1000, dt = graphics_state.animation_delta_time / 1000;
            let adjusted = Math.sin((t - 1) * (Math.PI / 2)) + 1
            let adjusted2 = Math.sin( (t - 2) * (Math.PI / 4))
            let t1 = Mat4.identity().times(Mat4.translation([0, 0, -15 - (adjusted * 7.5)]))
                .times(Mat4.rotation(Math.PI * adjusted*0.375 + (Math.PI * 0.25), Vec.of(0,1,0)))
                .times(Mat4.rotation(Math.PI * -adjusted*0.125 + (Math.PI * 0.25), Vec.of(1,0,0)))
            let t2 = Mat4.identity().times(Mat4.translation([0, 0, -30]))
                .times(Mat4.rotation(Math.PI, Vec.of(0,1,0)))
                .times(Mat4.rotation(Math.PI * adjusted2 * 0.05, Vec.of(0,1,0)))
            let t3 = Mat4.identity().times(Mat4.translation([0, 0, -30]))
                .times(Mat4.rotation(Math.PI*0.95, Vec.of(0,1,0)))
                .times(Mat4.rotation(Math.PI * adjusted * 1.025, Vec.of(0,1,0)))

            if (t < 2){
                graphics_state.camera_transform = t1
                this.do_shadow = true
            }
            else if (Math.floor(t) % 16 == 0 || Math.floor(t-1) % 16 == 0){
                graphics_state.camera_transform = t3
                this.do_shadow = false;
            }
            else{
                graphics_state.camera_transform = t2
                this.do_shadow = true
            }


        }

        restart(){
            this.lose = false;
            this.init = true;
            this.game_clock = 0;
            this.positionx = 4;
            this.positiony = 19;
            this.anim_clock = 0;
            this.clean_start_line =0;
            this.num_of_lines =0;
            this.num_of_lines_cleared =0;

            for(let y = 3; y < this.height+3; y++) {
                for (let x = 3; x < this.width+3; x++) {
                    this.core[y][x] = 0;
                }
            }
        }

        display(graphics_state) {
            // graphics_state.lights = this.lights;        // Use the lights stored in this.lights.
            const t = graphics_state.animation_time / 1000;
            let theta = Math.PI*t/10;
            let sun = Mat4.identity().times(Mat4.translation([25 * Math.sin(theta),25 * Math.cos(theta)-10,0]));
            let moon = Mat4.identity().times(Mat4.translation([-25 * Math.sin(theta),-25 * Math.cos(theta)-10,0]));
            this.shapes.sun.draw(graphics_state, sun,this.materials.sun);
            this.shapes.sun.draw(graphics_state, moon,this.materials.moon);

            let bk = Mat4.identity();
            this.shapes.frame.draw(graphics_state, bk.times(Mat4.scale([30, 30, 120])), this.materials.background);

            this.draw_gmae_sense(graphics_state,theta);

            let speed = 1 / (1 + Math.floor(this.num_of_lines_cleared / 4));
            if(this.speedup){
                speed = 0.025;
                console.log("speed up")
            }
            if(this.lose){
                const dt = 0
            }else{
                const dt = graphics_state.animation_delta_time / 1000;
                this.check_line();
                this.clean_line_anim(dt,graphics_state)
                if (this.init) {
                    this.create_block(this.next_piece_index);
                    this.get_next_block();
                    this.init = false;
                } else {
                    if (this.game_clock > speed) {
                        this.game_clock = 0;
                        this.go_down();
                    }else{
                        this.game_clock =  this.game_clock + dt;
                    }
                }
            }

        }
    };

class Texture_stay extends Phong_Shader {
    fragment_glsl_code() {
        // ********* FRAGMENT SHADER *********
        // TODO:  Modify the shader below (right now it's just the same fragment shader as Phong_Shader) for requirement #6.
        return `
        uniform sampler2D texture;
        void main()
        { if( GOURAUD || COLOR_NORMALS )    // Do smooth "Phong" shading unless options like "Gouraud mode" are wanted instead.
          { gl_FragColor = VERTEX_COLOR;    // Otherwise, we already have final colors to smear (interpolate) across vertices.            
            return;
          }                                 // If we get this far, calculate Smooth "Phong" Shading as opposed to Gouraud Shading.
                                            // Phong shading is not to be confused with the Phong Reflection Model.
                                                                      
          // Sample the texture image in the correct place.

          vec4 tex_color = texture2D( texture, f_tex_coord ); 

          // Compute an initial (ambient) color:
          if( USE_TEXTURE ) gl_FragColor = vec4( ( tex_color.xyz + shapeColor.xyz ) * ambient, shapeColor.w * tex_color.w ); 
          else gl_FragColor = vec4( shapeColor.xyz * ambient, shapeColor.w );
          gl_FragColor.xyz += phong_model_lights( N );                     // Compute the final color with contributions from lights.
        }`;
    }
}

