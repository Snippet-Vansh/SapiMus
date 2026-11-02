# SapiMus (Sapiens + Muscles)

> **"Understand Your Muscles. Build Your Strength."**  
> An interactive fitness anatomy and workout intelligence web application designed for gym beginners and fitness enthusiasts.

---

## ⚡ Overview & Aesthetic

**SapiMus** merges modern sports science and biomechanics with a dark, high-performance UI inspired by Apple minimalism and modern fitness-tech dashboards:
* **Background**: `#0B0B0D`
* **Surface / Cards**: `#151519` / `#18181E`
* **Primary Accent**: `#C7FF3D` (Neon Lime)
* **Text**: Pure White `#FFFFFF` & Muted Silver `#A0A0A0`

---

## 🧬 Real Medical 3D Muscular Anatomy System

The 3D Anatomy Visualizer uses a cadaver-derived full-body human muscular anatomy model:
* **467 Individually Separated Muscle Meshes** derived from **BodyParts3D** (The Database Center for Life Science, CC BY-SA 2.1 Japan) & **Z-Anatomy** (Gauthier Kervyn, CC BY-SA 4.0).
* **Anatomical Cranial Scan**: Sculpted head and cervical bust by Lee Perry-Smith (CC BY 3.0).
* **Draco-Compressed GLB (`anatomy.glb`, 4.8MB)**: Loads fast in the browser with high performance.
* **Interactive 3D Capabilities**:
  * **360° Mouse & Touch Orbital Controls**: Rotate, pitch, and inspect from any angle.
  * **Anatomical View Presets**: One-click smooth camera animation to **Front (Anterior)**, **Back (Posterior)**, **Left (Lateral)**, **Right (Lateral)**, and **Reset (Perspective)**.
  * **Raycast Muscle Click & Hover**: Hovering over any muscle displays a floating medical HUD with its exact anatomical name and subdivision head (e.g., *Clavicular Head of Pectoralis Major*, *Long Head of Biceps Brachii*). Clicking isolates that muscle group in SapiMus's signature **neon-lime (`#C7FF3D`)** while preserving natural muscle colors on the rest of the body.
  * **Auto-Rotate Turntable**: 360-degree slow turntable showcase mode.
  * **Zoom Controls**: Smooth zoom in/out with clamp limits.

---

## 🚀 Key Modules & Capabilities

### 1. Interactive Muscular Anatomy Explorer
* **12+ Major Muscle Groups Mapped**:
  * Chest (*Pectoralis Major & Minor*)
  * Biceps (*Biceps Brachii & Brachialis*)
  * Triceps (*Triceps Brachii Long, Lateral & Medial Heads*)
  * Shoulders (*Anterior, Lateral & Posterior Deltoids*)
  * Forearms (*Brachioradialis, Wrist Flexors & Extensors*)
  * Abs & Core (*Rectus Abdominis & External Obliques*)
  * Back (*Latissimus Dorsi, Rhomboids & Erector Spinae*)
  * Trapezius (*Upper, Middle & Lower Traps*)
  * Quadriceps (*Rectus Femoris, Vastus Lateralis & Vastus Medialis*)
  * Hamstrings (*Biceps Femoris, Semitendinosus & Semimembranosus*)
  * Calves (*Gastrocnemius & Soleus*)
  * Glutes (*Gluteus Maximus, Medius & Minimus*)
* **Dual Viewport Engine**:
  * **3D Medical Muscular Anatomy Model** (Three.js WebGL with 467 meshes, lighting, shadows, and raycasting).
  * **2D Vector Anatomical Map** (Anterior and Posterior interactive vector anatomy with hover highlights).
* **Deep Anatomical Insights**:
  * Anatomical location, origin/insertion summary.
  * Biomechanical function.
  * Muscle compartments & optimal stimulus angles.
  * Top vetted exercises.
  * Synergist/secondary muscles involved.
  * Coach tips & common form pitfalls.
  * Weekly growth volume targets.

### 2. Precision Exercise Library
* **30+ Evidence-Based Exercises** with verified biomechanics.
* **Search & Multi-Filter Engine**:
  * Instant search across exercise names, equipment, target muscles, and keywords.
  * Filter by Muscle Group (12+ options).
  * Filter by Difficulty (Beginner, Intermediate, Advanced).
  * Filter by Equipment (Barbell, Dumbbell, Cable, Machine, Bodyweight).
  * Filter by Kinematics (Compound vs. Isolation).
  * Filter by Saved / Favorites (saved locally in browser `localStorage`).

### 3. Algorithmic Workout Finder
* Step-by-step recommendation wizard:
  1. Primary Target Muscle
  2. Experience Level (Beginner, Intermediate, Advanced)
  3. Available Equipment (Commercial Gym, Dumbbells Only, Bodyweight / Calisthenics)
  4. Training Goal (Hypertrophy, Strength, Endurance)
* Generates an intelligent routine with warm-up protocols and one-click clipboard copy.

### 4. Structured Workout Plans
* Periodized routines for natural lifters:
  * **3-Day Full Body Foundation**
  * **Push Pull Legs (PPL)**
  * **4-Day Upper Lower Split**
  * **Dumbbell & Bodyweight Home Special**
* Day-by-day tabs with sets, reps, rest intervals, and print/export support.

### 5. Sports Science Academy (Learn Section)
* Comprehensive evidence-based articles:
  * *The Science of Muscle Hypertrophy*
  * *The Progressive Overload Blueprint*
  * *Muscle Recovery & Supercompensation*
  * *Sets, Reps & RPE*
  * *Training Frequency*
  * *Protein & Nutrition*
  * *Technique & Mind-Muscle Connection*

### 6. Built-In Gym Tool Suite
* **1RM Calculator**: Brzycki formula estimator with percentage benchmarks.
* **Interval Rest Timer**: Presets for 60s, 90s, 120s, 180s.
* **Barbell Plate Calculator**: Calculates exact 45lb/20kg barbell plate loading per side.

---

## 💻 Development & Execution

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
