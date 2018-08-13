<div class="margin-top: 15px;">
        <el-row>
            <el-col :span="9" :offset="8" >
                <el-input v-model="input" placeholder="大家正在搜，办事大厅冷热有别" class="Iselect" size="small">
                   <el-select v-model="select" class="ing-select" placeholder="新闻" slot="prepend" trigger="hover">
                      <el-option 
                         v-for="item1 in options1"
                         :key="item1.value1"
                         :label1="item1.label1"
                         :value1="item1.value1"
                      >
                      </el-option>
                    </el-select>
                   <el-button slot="append">搜索</el-button> 
                  </el-input>
                 </el-col>
             <el-col :span="8" :offset="3">
                 <el-button type="primary" icon="el-icon-edit"></el-button>
                 <el-button type="primary" icon="el-icon-share"></el-button>
                 <el-button type="primary" icon="el-icon-delete"></el-button>
                 <el-button type="primary" icon="el-icon-search">搜索</el-button> 
                 <el-button plain class="button" size="small">
                 <img src="../assets/社会主义核心价值观.png" class="oneHeaderPng1" stretch>
                 </el-button>
             </el-col>
        </el-row>
        <el-row>





        options1:[
                {
                    value1:'选项1',
                    label1:'新闻'
                },
                {
                    value1:'选项2',
                    label1:'微博'
                },
                {
                    value1:'选项3',
                    label1:'图片'
                },
                {
                    value1:'选项4',
                    label1:'博客'
                },
                {
                    value1:'选项5',
                    label1:'视频'
                },
                {
                    value1:'选项6',
                    label1:'短视频'
                }
            ],
                    value1:'选项1',
                    select:'选项1'
    }
  }
}





<div class="margin-top: 15px;">
        <el-row>
            <el-col :span="9" :offset="8" >
                <el-input v-model="input" placeholder="大家正在搜，办事大厅冷热有别" class="Iselect" size="small">
                   <el-select v-model="select" class="ing-select" placeholder="新闻" slot="prepend" trigger="hover">
                      <el-option 
                         v-for="item1 in options1"
                         :key="item1.value1"
                         :label1="item1.label1"
                         :value1="item1.value1"
                      >
                      </el-option>
                    </el-select>
                   <el-button slot="append">搜索</el-button> 
                  </el-input>
                 </el-col>
             <el-col :span="8" :offset="3">
                 <el-button type="text" icon="el-icon-edit" plain></el-button>
                 <el-button type="text" icon="el-icon-share" plain></el-button>
                 <el-button type="text" icon="el-icon-delete" plain></el-button>
                 <el-button type="primary" icon="el-icon-search" plain size="small">搜索</el-button> 
                 <el-button plain class="button" size="small">
                 <img src="../assets/社会主义核心价值观.png" class="oneHeaderPng1">
                 </el-button>
             </el-col>
        </el-row>
</template>


                 <el-button plain size="small">
                 <img src="../assets/社会主义核心价值观.png" class="oneHeaderPng1">
                 </el-button>
                 <el-button slot="append">搜索</el-button>