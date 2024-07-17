<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Gutter</div>
      <q-separator class="q-my-md" />
      <div class="bg-yellow">
        <div class="q-gutter-x-md">
          <div v-for="n in 4" :key="n" class="square"></div>
        </div>
        <div class="q-gutter-y-md">
          <div v-for="n in 4" :key="n" class="bg-primary">{{ n }}</div>
        </div>
        <q-separator spaced />
        <!-- flax box를 통해서 4개씩 유지하면서 간격이 생긴다 col 빼면 깨짐 -->
        <div class="row q-col-gutter-md">
          <!-- breakpoints -->
          <div
            v-for="n in 8"
            :key="n"
            class="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Title
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Col</div>
      <q-separator class="q-my-md" />
      <div class="row">
        <div class="border col-2">col-2</div>
        <div class="border col-8">col-8</div>
        <div class="border col-2">col-2</div>
        <div class="border col-2">col-2</div>
      </div>
      <q-separator spaced />
      <div class="row">
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
      </div>
      <q-separator spaced />
      <div class="row">
        <div class="border col-auto">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
        <div class="border col">col</div>
      </div>
      <q-separator spaced />
      <div class="row">
        <div class="border col-grow">col-grow</div>
        <div class="border col-1">col-1</div>
        <div class="border col-1">col-1</div>
        <div class="border col-1">col-1</div>
      </div>
      <q-separator spaced />
      <div class="row no-wrap">
        <div class="border col-auto">col-auto col-auto col-auto col-auto</div>
        <div class="border col-shrink">
          col-shrink col-shrink col-shrink col-shrink
        </div>
        <div class="border col-1">col-1</div>
        <div class="border col-1">col-1</div>
        <div class="border col-1">col-1</div>
        <div class="border col-1">col-1</div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Toolbar</div>
      <div
        class="row items-center bg-primary q-px-sm justify-between"
        :style="{ minHeight: '50px' }"
      >
        <div class="row items-center">
          <q-btn icon="menu" flat dense round color="white" />
          <span class="text-h6 text-weight-bold text-white">Quasar App</span>
        </div>
        <div>
          <q-btn icon="light_mode" flat dense round color="white" />
        </div>
      </div>
      <q-separator class="q-my-md" />
    </section>

    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Row</div>
      <q-separator class="q-my-md" />
      <div class="row inline bg-yellow">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
      <q-separator spaced />
      <div class="row inline reverse bg-yellow">
        <div class="square" v-for="n in 6" :key="n">{{ n }}</div>
      </div>
      <q-separator spaced />
      <div class="row inline bg-yellow no-wrap">
        <div class="square" v-for="n in 16" :key="n">{{ n }}</div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Flexbox - Column</div>
      <q-separator class="q-my-md" />
      <div class="column inline bg-yellow">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.square {
  height: 80px;
  width: 80px;
  background-color: $primary;
  border: 1px solid black;
  display: inline-block;
  font-weight: 900;
  color: #fff;
}

.border {
  border: 1px solid $primary;
  padding: 8px;
}
</style>
