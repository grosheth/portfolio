<template>
    <div class="item">
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <h3>
          <slot name="heading"></slot>
        </h3>
        <p>
          <slot name="paragraph"></slot>
        </p>
        <slot></slot>
      </div>
    </div>
  </template>