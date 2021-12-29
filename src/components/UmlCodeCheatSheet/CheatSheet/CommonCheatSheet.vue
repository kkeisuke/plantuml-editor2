<script setup lang="ts">
import { common } from '@/assets/json/cheatsheets.json'
import CopyablePre from '@/components/UmlCodeCheatSheet/CopyablePre.vue'
import CopyableCode from '@/components/UmlCodeCheatSheet/CopyableCode.vue'
const url = `${import.meta.env.VITE_PLANTUML_SERVER}/svg/`
</script>

<template>
  <div id="CommonCheatSheet">
    <div class="h4">Common</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ common.header.title }}</td>
          <td>
            <copyable-pre>{{ common.header.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ common.footer.title }}</td>
          <td>
            <copyable-pre>{{ common.footer.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ common.scale.title }}</td>
          <td>
            <copyable-code>{{ common.scale.text }}</copyable-code> 1.5<br />
            <copyable-code>{{ common.scale.text }}</copyable-code> 200 width<br />
            <copyable-code>{{ common.scale.text }}</copyable-code> 200 height<br />
            <copyable-code>{{ common.scale.text }}</copyable-code> max 1024 width
          </td>
        </tr>
        <tr>
          <td>{{ common.define.title }}</td>
          <td>
            <copyable-code>{{ common.define.text }}</copyable-code> ABC text
          </td>
        </tr>
        <tr>
          <td>{{ common.title.title }}</td>
          <td>
            <copyable-code>{{ common.title.text }}</copyable-code> Title
          </td>
        </tr>
        <tr>
          <td>{{ common.legend.title }}</td>
          <td>
            <copyable-pre>{{ common.legend.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ common.caption.title }}</td>
          <td>
            <copyable-code>{{ common.caption.text }}</copyable-code> figure 1
          </td>
        </tr>
        <tr>
          <td>{{ common.direction.title }}</td>
          <td>
            <copyable-code>{{ common.direction.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ common.label.title }}</td>
          <td>
            <copyable-code>{{ common.label.text }}</copyable-code> label
          </td>
        </tr>
        <tr>
          <td>{{ common.comment.title }}</td>
          <td>
            <copyable-code>{{ common.comment.text }}</copyable-code> comment
          </td>
        </tr>
        <tr>
          <td>{{ common.blockcomment.title }}</td>
          <td>
            <copyable-pre>{{ common.blockcomment.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ common.solidline.title }}</td>
          <td>
            <copyable-code>{{ common.solidline.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ common.dashedline.title }}</td>
          <td>
            <copyable-code>{{ common.dashedline.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td rowspan="3">note</td>
          <td>
            <copyable-code>{{ common.noteleft.text }}</copyable-code> note
          </td>
        </tr>
        <tr>
          <td>
            <copyable-code>{{ common.noteright.text }}</copyable-code> note
          </td>
        </tr>
        <tr>
          <td>
            <copyable-pre>{{ common.noteblock.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="`${url}${common.actor.img}`" :alt="common.actor.title" />
          </td>
          <td>
            <copyable-code>{{ common.actor.text }}</copyable-code> Actor
          </td>
        </tr>
        <tr>
          <td>
            <copyable-code>{{ common.actoralias.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="`${url}${common.agent.img}`" :alt="common.agent.title" />
          </td>
          <td>
            <copyable-code>{{ common.agent.text }}</copyable-code> Agent
          </td>
        </tr>
        <tr>
          <td>
            <img :src="`${url}${common.usecase.img}`" :alt="common.usecase.title" />
          </td>
          <td>
            <copyable-code>{{ common.usecase.text }}</copyable-code> UseCase
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="`${url}${common.node.img}`" :alt="common.node.title" />
          </td>
          <td>
            <copyable-code>{{ common.node.text }}</copyable-code> Node
          </td>
        </tr>
        <tr>
          <td>
            <copyable-pre>{{ common.nodeblock.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="`${url}${common.database.img}`" :alt="common.database.title" />
          </td>
          <td>
            <copyable-code>{{ common.database.text }}</copyable-code> DB
          </td>
        </tr>
        <tr>
          <td>
            <copyable-pre>{{ common.databaseblock.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="`${url}${common.storage.img}`" :alt="common.storage.title" />
          </td>
          <td>
            <copyable-code>{{ common.storage.text }}</copyable-code> Storage
          </td>
        </tr>
        <tr>
          <td>
            <copyable-pre>{{ common.storageblock.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="`${url}${common.component.img}`" :alt="common.component.title" />
          </td>
          <td>
            <copyable-code>{{ common.component.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            {{ common.skinparammonochrome.title }}
          </td>
          <td>
            <copyable-code>{{ common.skinparammonochrome.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>
            <copyable-code>{{ common.skinparammonochromereverse.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ common.skinparamhandwritten.title }}</td>
          <td>
            <copyable-code>{{ common.skinparamhandwritten.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ common.skinparamshadowing.title }}</td>
          <td>
            <copyable-code>{{ common.skinparamshadowing.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ common.skinparambackgroundcolor.title }}</td>
          <td>
            <copyable-code>{{ common.skinparambackgroundcolor.text }}</copyable-code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
