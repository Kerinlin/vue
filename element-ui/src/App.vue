<template>
  <div id="app">
    <header class="header header-fixed">
      <el-row>
        <el-col :span="24">
          <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">活动发布</el-menu-item>
          <el-menu-item index="2">活动管理</el-menu-item>
        </el-menu>
      </div>
      <div class="main-right">
        <div class="activePublic">
          <el-steps :space="200" :active="step">
            <el-step title="活动信息"></el-step>
            <el-step title="报名签到"></el-step>
            <el-step title="分享设置"></el-step>
            <el-step title="个性设置"></el-step>
          </el-steps>
          <div class="step1">
            <el-form class="demo-ruleForm" ref="ruleForm" lable-position="top" :model="ruleForm">
              <el-form-item prop="name" label="活动名称">
                <el-input v-model="ruleForm.name" size="larget">
                </el-input>
              </el-form-item>
              <el-form-item label="" prop="fenLei">
                <el-row style="height:35px;" type="flex" align="middle">
                  <el-col :span="3" style="width:90px;">
                    <div class="el-form-item__label">活动分类</div>
                  </el-col>
                  <el-col :span="2">
                    <el-button @click.prevent="dialogFormFenLeiVisable=true" type="text">设置</el-button>
                  </el-col>
                </el-row>
                <el-radio-group v-model="ruleForm.fenLei">
                  <el-radio v-for="item of ruleForm.fenleis" :key="item.name" :label="item.name"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动标签" required>
                <el-tag v-for="tag in ruleForm.tags" :key="tag.name" :closable="true" type="primary" @close="handleClose(tag)">{{tag.name}}</el-tag>
                <el-button icon="el-icon-plus" size="large" @click.native.prevent="showDialog" style="vertical-align:middle;margin:10px;"></el-button>
                <transition name="fade">
                  <div class="el-form-item__error" v-show="tagsValid">{{tagsError}}</div>
                </transition>
              </el-form-item>
            </el-form>
            <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisable">
              <el-form>
                <el-form-item>
                  <el-tag v-for="fenLei of ruleForm.fenleis" type="primary" :key="fenLei.name" @close="handleClose(tag)" closable>{{fenLei.name}}</el-tag>
                </el-form-item>
              </el-form>
            </el-dialog>
            <el-dialog title="添加活动标签" :visible.sync="dialogFormVisable" top="35%">
              <el-form :model="dialogForm">
                <el-form-item>
                  <el-input v-model="dialogForm.name" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click.native="dialogFormVisable=false">取消</el-button>
                <el-button type="primary" @click.native="handleAdd(dialogForm.name,dialogForm,ruleForm.tags)">添加</el-button>
              </span>
            </el-dialog>
          </div>
          <el-button-group>
            <el-button v-show="preStep" type="primary" @click.native.prevent="handlePreStep">上一步</el-button>
            <el-button v-show="nextStep" type="primary" @click.native.prevent="handleNextStep">下一步</el-button>
            <el-button type="primary">发布活动</el-button>
          </el-button-group>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        disabled: false,
        isLoading: false,
        step: 0,
        preStep: true,
        nextStep: true,
        dialogFormVisible: false,
        tagsValid: false,
        tagsError: '请设置标签',
        dialogForm: {
          name: ''
        },
        dialogFormFenLeiVisable: false,
        ruleForm: {
          name: '',
          fenleis: [{
              name: '未发布'
            },
            {
              name: '测试活动'
            },
            {
              name: '精彩活动'
            }
          ],
          fenlei: '测试活动',
          tags: []
        }
      }
    },
    components: {
      // 'el-button': ELButton,
      // 'el-button-group': ELButtonGroup
    },
    mounted() { //生命周期函数
      setTimeout(() => {
        this.disabled = true
      }, 2000)
    },
    methods: {
      doSubmit(evt) {
        console.log('aaa');
      },
      showDialog: function() {
        if (this.ruleForm.tags.length >= 5) {
          this.$message({
            message: "最多设置5个标签",
            type: 'warning'
          });
        } else {
          this.dialogFormVisable = true;
          this.dialogForm = {}
        }
      },
      handlePreStep() {
        this.step--;
        this.goStep(this.step)
      },
      handleNextStep() {
        this.step++;
        this.goStep(this.step)
      },
      goStep(n) {
        switch (n) {
          case 1:
            this.preStep = false;
            this.nextStep = true;
            break;
          case 2:
            this.preStep = true;
            this.nextStep = true;
            break;
          case 3:
            this.preStep = true;
            this.nextStep = true;
            break;
          case 4:
            this.preStep = true;
            this.nextStep = false;
            break;
        }
      },
      handleClose(tag) {
        this.dialogFormFenLeiVisable = false;
        this.ruleForm.tags.splice(this.ruleForm.tags.indexOf(tag),1)
      },
      handleAdd: function(tag, form, tags) {
        if (tag && tag.trim().length !== 0) {
          var isExist = false;
          tag = tag.trim();
          for (let i = 0; i < tags.length; i++) {
            if (tags[i].name == tag) {
              isExist = true;
              break
            }
          }
          if (isExist) {
            this.$message({
              message: '标签已存在',
              type: 'warning'
            });
          } else {
            this.dialogFormVisable = false;
            this.dialogFormFenLeiVisable = false;
            tags.push({
              name: tag
            });
          }
        } else {
          this.$message({
            message: '标签不能为空',
            type: 'warning'
          });
        }
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: serif;
  }
  header {
    z-index: 1000;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: 4px solid #3091f2;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)
  }
  header.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  header.el-menu-demo {
    padding-left: 300px!important;
  }
  main {
    margin-top: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    border: solid 40px #E9ECF1;
    background-color: #FCFCFC;
  }
  main .main-left {
    text-align: center;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
  }
  main .main-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #fff;
    padding: 50px 70px;
  }
  main .el-menu {
    background-color: transparent!important;
  }
  .step {
    margin-bottom: 30px;
  }
  .step1 .demo-ruleForm .el-form-item {
    margin-bottom: 25px;
    margin-right: 50px;
  }
  .step1 .el-form-item.is-required .el-form-item__label:after {
    content: '*';
    color: #ff4949;
    margin-right: 4px;
  }
  .step1 .el-form-item.is-required .el-form-item__label:before {
    display: none;
  }
  /* 标签 */
  .step1 .el-tag {
    padding: 10px 15px;
    margin: 10px;
    vertical-align: middle;
    height: auto;
  }
  .step1 .el-tag:first-child {
    margin-left: 0;
  }
  /* 对话框 */
  .step1 .el-dialog--small {
    width: 564px;
  }
  .step1 .el-dialog__body {
    padding-bottom: 0;
  }
  .step1 .el-dialog__body .el-form-item {
    margin-bottom: 10px;
  }
  .step1 .el-dialog__wrapper .el-button {
    margin-left: 15px;
  }
  /* 时间选择器 */
  .step1 .el-date-editor {
    width: 150px;
  }
  .step1 .el-form-item .router-link {
    color: #fff;
  }
  .el-form-item__error {
    white-space: nowrap;
  }
</style>
