

//  Vue.component('summernote',{
//   data() {
//     return {
//         content: null,
//         // ↓ It is what the configuration object looks like. ↓
//         config: {
//             height: 100,
//             toolbar: [
//                 // [groupName, [list of button]]
//                 ['style', ['bold', 'italic', 'underline', 'clear']],
//                 ['font', ['strikethrough', 'superscript', 'subscript']],
//                 ['fontsize', ['fontsize']],
//                 ['color', ['color']],
//                 ['para', ['ul', 'ol', 'paragraph']],
//                 ['insert', ['gxcode']], // plugin config: summernote-ext-codewrapper
//           ],
//         }, 
//     }
//   },
//   template:
//     `
//     <div>
//     <textarea name="editor" v-model="content"
//       v-on:change="value => { content = value }"
//       v-config="config"
//     ></textarea>
//     </div>
//     `,
// })


  new Vue({
    el:"#app",
    data:{
      summer:"aaaa",
      note: '123',
    },
    mounted(){
      $('#summernote').summernote({
        placeholder: "編輯資訊",
        tabsize: 2,
        height: 200,
      });
    },
    methods:{
      // getFiles(e){
      //   console.log(e);
      //   this.summer = e.target.code();
      //   console.log( this.summer);
      // addMaterials: function(e){
      //   console.log(this.note);
      // },
      //   ready: function() {
      //     var config = {};
      //     config.minHeight = null;
      //     config.maxHeight = null;
      //     config.toolbar =  [ 
      //            ['style', ['bold', 'italic', 'underline', 'clear']],
      //            ['color', ['color']],
      //            ['para', ['ul', 'ol', 'paragraph']],
      //            ['height', ['height']]
 
      //        ]; // watever toolbar you need..
 
      //     config.onBlur = function(e) {
      //         $this.note = $(element).code(); // take here element code and assign 
      //       };
      //     $(element).summernote(config);
         
          
     // here first do ajax call to fetch latest note from server
     // in successful response - do    $(element).code(response); to set initial value
        
 
       },
  })