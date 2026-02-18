<script lang="ts">
  let { 
    size = '40px', 
    color = '#3b82f6' 
  } : {
    size: string;
    color: string;
  } = $props();
</script>


<div
  aria-label="Loading"
  role="status"
  class="spinner"
  style="width: {size}; height: {size}; border-top-color: {color};"></div>


<style>
  .spinner {
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: var(--primary-text);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    to {
    transform: rotate(360deg);
    }
  }
</style>