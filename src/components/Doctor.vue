<template>
    <div>
     <v-toolbar>
          <v-btn icon @click="$router.go(-1)">
              <v-icon>arrow_back</v-icon>
            </v-btn>
    <v-toolbar-title> {{$t("home.diagnosis")}}</v-toolbar-title>
  </v-toolbar>
   <v-content>
    <v-container fluid>
     <v-btn color="primary" @click=" $i18n.locale = 'ja'">Change language</v-btn>
    </v-container>
  </v-content>

  </div>
</template>

<script>
export default {
  
}
</script>
