<template>
  <div class="member">
    <navbar></navbar>
    <Table border :columns="columns7" :data="data6"></Table>
  </div>
</template>
<script>
    import navbar from './nav.vue'
    export default {
        name: 'member',
        data () {
            return {
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 140,
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '学院',
                        key: 'age',
                        width: 210
                    },
                    {
                        title: '邮箱',
                        width: 200,
                        key: 'address'
                    },
                    {
                        title: '组别',
                        width: 127,
                        key: 'zubie'
                    },
                    {
                        title: '级别',
                        width: 120,
                        key: 'jibie'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '王小明',
                        age: '物理学院',
                        address: '871442779@qq.com',
                        zubie: '程序组',
                        jibie: '组员'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '871442779@qq.com',
                        zubie: '平面组',
                        jibie: '管理人员'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '871442779@qq.com',
                        zubie: '程序组',
                        jibie: '组员'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '871442779@qq.com',
                        zubie: '策划组',
                        jibie: '管理人员'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        },
        components: {
          navbar
        }
    }
</script>
