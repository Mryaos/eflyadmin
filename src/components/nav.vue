<template lang="html">
  <nav class="nav">
    <Menu>
        <MenuGroup title="管理中心">
            <MenuItem name="1">
                <Icon type="document-text"></Icon>
                <router-link to="/" class="mem">成员信息</router-link>
            </MenuItem>
            <MenuItem name="2">
                <Icon type="chatbubbles"></Icon>
                <router-link to="/personal" class="per">个人中心</router-link>
            </MenuItem>
        </MenuGroup>
    </Menu>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="css">
.ivu-table-wrapper {
  min-height: 600px;
  float: left;
  width: 950px;
}

.nav {
  float: left;
  border-top: 1px solid #dddee1;
  border-right: 1px solid #dddee1;
  min-height: 900px !important;
}
</style>
